(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Select', '../helpers/shadowDOM', '@webcomponents/shadydom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Select'), require('../helpers/shadowDOM'), require('@webcomponents/shadydom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Select, global.shadowDOM, global.shadydom);
    global.ShadowDOM = mod.exports;
  }
})(this, function (exports, _Select, _shadowDOM) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Select2 = _interopRequireDefault(_Select);

  var _shadowDOM2 = _interopRequireDefault(_shadowDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  if (process.env.NODE_ENV !== 'test') {}

  exports.default = (0, _shadowDOM2.default)(_Select2.default);
});
//# sourceMappingURL=ShadowDOM.js.map