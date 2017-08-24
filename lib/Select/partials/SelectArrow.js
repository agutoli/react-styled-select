(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', '../defaults.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('../defaults.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.defaults);
    global.SelectArrow = mod.exports;
  }
})(this, function (exports, _styledComponents, _defaults) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _defaults2 = _interopRequireDefault(_defaults);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var isOpened = function isOpened() {
    return '\n  transform: translateY(18%) rotate(-134deg);\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectArrow'
  })(['box-sizing:border-box;font-family:', ';font-family:var(--styled-select-arrow-font-family,', ');border-style:none;border-right-style:solid;border-bottom-style:solid;border-right-width:1px;border-bottom-width:1px;border-right-color:', ';border-bottom-color:', ';border-right:1px var(--styled-select-arrow-color,', ') solid;border-bottom:1px var(--styled-select-arrow-color,', ') solid;border-bottom-right-radius:25%;transform:translateY(-25%) rotate(45deg);', ' display:inline-block;height:8px;width:8px;position:relative;'], _defaults2.default.fontFamily, _defaults2.default.fontFamily, _defaults2.default.arrow__color, _defaults2.default.arrow__color, _defaults2.default.arrow__color, _defaults2.default.arrow__color, function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectArrow.js.map