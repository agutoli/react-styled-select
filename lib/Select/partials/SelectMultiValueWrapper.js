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
    global.SelectMultiValueWrapper = mod.exports;
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

  var g = (0, _cssHelpers.autoCssGenerator)('select-multi-value-wrapper');

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectMultiValueWrapper'
  })(['box-sizing:border-box;display:flex;align-items:center;align-content:space-around;', ' flex:2 100%;flex-wrap:wrap;'], g('padding'));
});
//# sourceMappingURL=SelectMultiValueWrapper.js.map