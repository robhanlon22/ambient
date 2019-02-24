const minGain = 0.0001;
const maxGain = 2;

// C major in just intonation
const notes = [261.63, 294.33, 327.03, 348.83, 392.44, 436.05, 490.55, 523.25];

export class Plink {
  public periodicWave: PeriodicWave;
  public paused: boolean = true;

  private next = 0;

  constructor(private readonly audioContext: AudioContext) {
    this.periodicWave = audioContext.createPeriodicWave(
      new Float32Array(1),
      new Float32Array(1)
    );
  }

  public play() {
    this.paused = false;
    requestAnimationFrame(this.tick);
  }

  public pause() {
    this.paused = true;
  }

  public tick: FrameRequestCallback = timestamp => {
    if (this.paused) {
      return;
    }

    requestAnimationFrame(this.tick);

    if (timestamp <= this.next) {
      return;
    }

    this.next = this.next + 1500 + (Math.random() * 1000 - 1000);

    const when = this.audioContext.currentTime + 10;

    const oscillator = this.audioContext.createOscillator();
    oscillator.frequency.value =
      notes[Math.floor(Math.random() * notes.length)];
    oscillator.setPeriodicWave(this.periodicWave);

    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = minGain;

    oscillator.connect(gainNode).connect(this.audioContext.destination);

    gainNode.gain.exponentialRampToValueAtTime(
      maxGain,
      this.audioContext.currentTime + 1
    );

    gainNode.gain.exponentialRampToValueAtTime(minGain, when);

    oscillator.start();
    oscillator.stop(when);

    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gainNode.disconnect();
    });
  };
}
