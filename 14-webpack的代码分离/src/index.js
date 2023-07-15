// import _ from "lodash";
import dayjs from "dayjs";
import "./bar1";
import "./bar2";

console.log("index");
// console.log(_.join(["hello", "index"]));
console.log(dayjs());

import("lodash").then((res) => {
  console.log(res.default);
});

const btn = document.createElement("button");
btn.innerHTML = "加载元素";
btn.addEventListener("click", () => {
  import(
    /* webpackChunkName: "element" */
    /* webpackPrefetch: true */
    "./element"
  ).then((res) => {
    console.log("element:");
    console.log(res);
    document.body.appendChild(res.default);
  });
});
document.body.appendChild(btn);
