import React, { useEffect, useState } from "react";
import { Plink } from "./Plink";

const sample = 10;

export const Tune: React.SFC = () => {
  const [audioContext] = useState(new AudioContext());
  const [real, setReal] = useState(new Float32Array(sample));
  const [paused, setPaused] = useState(true);
  const [plink] = useState(new Plink(audioContext));

  useEffect(() => {
    plink.periodicWave = audioContext.createPeriodicWave(
      real,
      new Float32Array(sample)
    );
  }, [real]);

  return (
    <div>
      {times(sample - 1, i => (
        <input
          key={i}
          type="range"
          step={0.01}
          min={0}
          max={1}
          value={real[i + 1]}
          onChange={event => {
            const slider = parseFloat(event.target.value);
            const realCopy = real.slice();
            realCopy[i + 1] = slider;
            setReal(realCopy);
          }}
        />
      ))}

      <button
        onClick={() => {
          if (audioContext.state === "suspended") {
            audioContext.resume();
          }

          if (paused) {
            plink.play();
          } else {
            plink.pause();
          }

          setPaused(!paused);
        }}
      >
        {paused ? "Start" : "Pause"}
      </button>
    </div>
  );
};

function times<T>(n: number, f: (n: number) => T) {
  const array = [];
  for (let i = 0; i < n; i += 1) {
    array.push(f(i));
  }
  return array;
}
