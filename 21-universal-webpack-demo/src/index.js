import "./file";
import "./index.css";
import log from "./es6";
import about from "./about.md";
import hmr from "./hmr";
import _ from "lodash";

setTimeout(() => {
  import("./async.js");
}, 1000);

log();
let ele = hmr();
document.body.appendChild(ele);
console.log(about);
console.log(123);

module.hot.accept("./hmr.js", () => {
  console.log("模块热替换");
  document.body.removeChild(ele);
  ele = hmr();
  document.body.append(ele);
});
