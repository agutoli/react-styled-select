(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.defaults = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Select;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Select = (_Select = {
    fontFamily: '"Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif',

    // SelectValue
    value__left: '0',
    value__right: '0',
    value__top: '0',
    value__maxWidth: '100%',
    value__color: '#aaa',
    value__bottom: '0',
    value__position: 'absolute',
    value__overflow: 'overflow',
    value__padding: '0 10px',
    value__lineHeight: '34px'
  }, _defineProperty(_Select, 'value__overflow', 'hidden'), _defineProperty(_Select, 'value__whiteSpace', 'nowrap'), _defineProperty(_Select, 'value__textOverflow', 'ellipsis'), _defineProperty(_Select, 'valueLabel__color', '#777'), _defineProperty(_Select, 'arrow__color', '#9b9ba5'), _defineProperty(_Select, 'clear__fontSize', '14px'), _defineProperty(_Select, 'clearZone__color', '#999'), _defineProperty(_Select, 'option__focused__backgroundColor', ''), _defineProperty(_Select, 'control__borderColor', '#dcdce3'), _defineProperty(_Select, 'control__focused__borderColor', '#40a3f5'), _defineProperty(_Select, 'no__results__color', '#999999'), _defineProperty(_Select, 'no__results__padding', '8px 10px'), _defineProperty(_Select, 'input__height', '34px'), _defineProperty(_Select, 'input__padding', '0 10px'), _Select);

  exports.default = Select;
});
//# sourceMappingURL=defaults.js.map