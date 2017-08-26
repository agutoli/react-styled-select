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
    global.SelectMenuOuter = mod.exports;
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

  var g = (0, _cssHelpers.autoCssGenerator)('select-menu-outer');

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectMenuOuter'
  })(['box-sizing:border-box;position:absolute;top:100%;width:100%;z-index:1;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], g('margin'), g('padding'), g('max-height'), g('box-shadow'), g('border-color'), g('border-width'), g('border-style'), g('border-radius'), g('background-color'));
});
//# sourceMappingURL=SelectMenuOuter.js.map