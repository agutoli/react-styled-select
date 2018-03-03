(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Async', '../Select', '../helpers/shadowDOM'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Async'), require('../Select'), require('../helpers/shadowDOM'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Async, global.Select, global.shadowDOM);
    global.ShadowDOM = mod.exports;
  }
})(this, function (exports, _react, _Async, _Select, _shadowDOM) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Async2 = _interopRequireDefault(_Async);

  var _Select2 = _interopRequireDefault(_Select);

  var _shadowDOM2 = _interopRequireDefault(_shadowDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ShadowWrapper = (0, _shadowDOM2.default)(_Select2.default);

  ShadowWrapper.Async = function AsyncShadowDOM(props) {
    return _react2.default.createElement(
      _Async2.default,
      props,
      _react2.default.createElement(ShadowWrapper, null)
    );
  };

  exports.default = ShadowWrapper;
});
//# sourceMappingURL=ShadowDOM.js.map