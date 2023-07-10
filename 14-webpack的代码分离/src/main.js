import _ from "lodash";
import dayjs from "dayjs";

console.log("main");
console.log(_.join(["hello", "main"]));
console.log(dayjs());

import(/* webpackChunkName: "foo" */ "./foo").then((res) => {
  console.log(res);
});
