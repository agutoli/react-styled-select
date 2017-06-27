(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Select'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Select'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Select);
    global.index = mod.exports;
  }
})(this, function (exports, _Select) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Select2 = _interopRequireDefault(_Select);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Select2.default;
});
//# sourceMappingURL=index.js.map