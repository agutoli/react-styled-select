(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Select', './Select/Async'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Select'), require('./Select/Async'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Select, global.Async);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _Select, _Async) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Select2 = _interopRequireDefault(_Select);

  var _Async2 = _interopRequireDefault(_Async);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  _Select2.default.Async = function AsyncSelect(props) {
    return _react2.default.createElement(
      _Async2.default,
      props,
      _react2.default.createElement(_Select2.default, null)
    );
  };

  exports.default = _Select2.default;
});
//# sourceMappingURL=index.js.map