const marked = require("marked");

module.exports = (source) => {
  //   console.log(source);
  const html = marked.parse(source); // 将 markdown 文件的内容抓换成 html
  //   return "hello";
  //   return `module.exports = ${JSON.stringify(html)}`;
  return `export default ${JSON.stringify(html)}`;
};
