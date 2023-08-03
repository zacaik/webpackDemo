// import { foo } from "./common.js";
// console.log(foo);
// export default 123;
// console.log(__filename);

// 在 ES Module 中实现 __dirname __filename
import { fileURLToPath } from "url";
import { dirname } from "path";

console.log(import.meta);

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);
