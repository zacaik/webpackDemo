const path = require("path");

const appDir = process.cwd(); // 项目的根目录

const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = resolveApp;
