import { sum } from "./math";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import axios from "axios";
import React from "react";
import "./index.css";

axios
  .get("/api/getUser")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
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
