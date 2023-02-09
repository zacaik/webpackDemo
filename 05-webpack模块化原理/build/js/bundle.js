(function () {
  "use strict";
  var __webpack_modules__ = {
    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        mul: function () {
          return mul;
        },
        sum: function () {
          return sum;
        },
      });
      const sum = (num1, num2) => {
        return num1 + num2;
      };

      const mul = (num1, num2) => {
        return num1 * num2;
      };
    },
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  !(function () {
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          console.log(definition[key]);
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key], // get属性是一个方法，在对key取值时，会调用get方法
          });
        }
      }
      console.log(exports);
    };
  })();

  !(function () {
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();

  !(function () {
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  var __webpack_exports__ = {};
  !(function () {
    __webpack_require__.r(__webpack_exports__);
    var _js_math_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__("./src/js/math.js");

    console.log(_js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum);
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.sum)(10, 20));
    console.log((0, _js_math_js__WEBPACK_IMPORTED_MODULE_0__.mul)(10, 20));
  })();
})();
