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
    global.SelectValue = mod.exports;
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

  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');
  var g = (0, _cssHelpers.autoCssGenerator)('select-value');

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectValue'
  })(['display:inline-block;vertical-align:top;', ' ', ' ', ' ', ' ', ' ', ' ', ''], g('color'), g('padding'), g('max-width'), g('overflow'), g('text-overflow'), g('line-height'), g('white-space'));
});
//# sourceMappingURL=SelectValue.js.map