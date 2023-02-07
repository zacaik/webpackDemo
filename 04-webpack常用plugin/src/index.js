import { sum, mul } from "./js/math.js";
const { dateFormate } = require("./js/formate.js");
import "./js/component";
import "./css/index.css";
// import "css-loader!./css/index.css" // 内联方式配置css-loader

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(dateFormate());
