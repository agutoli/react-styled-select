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
    global.SelectValue = mod.exports;
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

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectValue'
  })(['color:', ';color:var(--styled-select-value-color,', ');line-height:', ';line-height:var(--styled-select-value-line-height,', ');padding:', ';padding:var(--styled-select-value-padding,', ');max-width:', ';max-width:var(--styled-select-value-max-width,', ');overflow:', ';overflow:var(--styled-select-value-overflow,', ');text-overflow:', ';text-overflow:var(--styled-select-value-text-overflow,', ');white-space:', ';white-space:var(--styled-select-value-white-space,', ');display:inline-block;vertical-align:top;'], _defaults2.default.value__color, _defaults2.default.value__color, _defaults2.default.value__lineHeight, _defaults2.default.value__lineHeight, _defaults2.default.value__padding, _defaults2.default.value__padding, _defaults2.default.value__maxWidth, _defaults2.default.value__maxWidth, _defaults2.default.value__overflow, _defaults2.default.value__overflow, _defaults2.default.value__textOverflow, _defaults2.default.value__textOverflow, _defaults2.default.value__whiteSpace, _defaults2.default.value__whiteSpace);
});
//# sourceMappingURL=SelectValue.js.map