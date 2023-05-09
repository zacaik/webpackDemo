import { sum } from "./math";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import React from "react";

sum(1, 2);
console.log("hello webpack 123");

if (module.hot) {
  module.hot.accept("./math.js", () => {
    console.log("math模块发生了热更新");
  });
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
