// import foo from "./module.js";

import("./module.js").then((module) => {
  console.log(module);
});

// console.log(foo);
console.log("app.js");
