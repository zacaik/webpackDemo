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
