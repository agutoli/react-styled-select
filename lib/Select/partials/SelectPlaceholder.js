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
    global.SelectPlaceholder = mod.exports;
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

  var g = (0, _cssHelpers.autoCssGenerator)('select-placeholder');

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectPlaceholder'
  })(['text-overflow:ellipsis;position:absolute;display:inline-block;white-space:nowrap;top:0;left:0;right:0;bottom:0;max-width:100%;overflow:hidden;', ' ', ' ', ' ', ' ', ''], g('color'), g('padding'), g('font-size'), g('font-family'), g('line-height'));
});
//# sourceMappingURL=SelectPlaceholder.js.map