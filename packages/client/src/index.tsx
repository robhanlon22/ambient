import React = require("react");
import ReactDOM = require("react-dom");
import Loadable = require("react-loadable");

const Hello = Loadable({
  loader: () => import("./Hello"),
  loading: () => null
});

ReactDOM.render(
  <Hello />,
  document.body.appendChild(document.createElement("div"))
);
