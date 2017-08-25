(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', '../cssHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('../cssHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.cssHelpers);
    global.SelectInputField = mod.exports;
  }
})(this, function (exports, _styledComponents, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-input');
  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');

  exports.default = _styledComponents2.default.input.withConfig({
    displayName: 'SelectInputField'
  })(['', ' ', ' box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;-webkit-appearance:none;'], g('line-height'), globalCss('color'));
});
//# sourceMappingURL=SelectInputField.js.map