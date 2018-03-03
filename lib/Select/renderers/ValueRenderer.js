(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../partials/SelectValueLabel'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../partials/SelectValueLabel'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectValueLabel);
    global.ValueRenderer = mod.exports;
  }
})(this, function (exports, _react, _SelectValueLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ValueRenderer;

  var _react2 = _interopRequireDefault(_react);

  var _SelectValueLabel2 = _interopRequireDefault(_SelectValueLabel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ValueRenderer(option, className) {
    return _react2.default.createElement(
      _SelectValueLabel2.default,
      {
        key: option.key,
        multi: option.multi,
        className: className,
        'data-select-value-label': true },
      option.label
    );
  }
});
//# sourceMappingURL=ValueRenderer.js.map