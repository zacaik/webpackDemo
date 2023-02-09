(function () {
  // 将每个模块用函数作用域包裹
  var __webpack_modules__ = {
    "./src/js/formate.js": function (module) {
      const dateFormate = (date) => {
        return "2022-2-15";
      };

      module.exports = {
        dateFormate,
      };
    },
  };

  var __webpack_module_cache__ = {};
  
  // 实现require方法
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 创建一个新的对象用来承载模块的导出
    var module = {
      exports: {},
    };

    // 将该对象放入缓存中
    __webpack_module_cache__[moduleId] = module;

    // 执行模块的代码，模块的导出将会被包裹成一个对象，作为该module对象的exports属性值
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // 返回模块的导出对象
    return module.exports;
  }

  // 立即执行函数
  !(function () {
    const { dateFormate } = __webpack_require__("./src/js/formate.js");

    console.log(dateFormate());
  })();
})();
