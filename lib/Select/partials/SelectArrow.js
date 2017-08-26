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
    global.SelectArrow = mod.exports;
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

  var v = (0, _cssHelpers.cssVar)('select-arrow');
  var g = (0, _cssHelpers.autoCssGenerator)('select-arrow');

  var isOpened = function isOpened() {
    return '\n  margin-top: ' + v('size') / 2 + 'px;\n  transform: rotate(-134deg);\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectArrow'
  })(['position:relative;display:inline-block;box-sizing:border-box;', ' ', ' border-style:none;border-right-style:solid;border-bottom-style:solid;border-right-width:1px;border-bottom-width:1px;border-right-color:', ';border-bottom-color:', ';border-right:1px ', ' solid;border-right:1px var(--styled-select-arrow__color,', ') solid;border-bottom:1px ', ' solid;border-bottom:1px var(--styled-select-arrow__color,', ') solid;border-bottom-right-radius:25%;transform:rotate(45deg);', ' height:', 'px;width:', 'px;'], g('border-right'), g('font-family'), v('color'), v('color'), v('color'), v('color'), v('color'), v('color'), function (props) {
    return props.isOpened && isOpened();
  }, v('size'), v('size'));
});
//# sourceMappingURL=SelectArrow.js.map