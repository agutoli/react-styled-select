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
    global.SelectValueLabel = mod.exports;
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
    displayName: 'SelectValueLabel'
  })(['font-family:', ';font-family:var(--styled-select-value-label-font-family,', ');color:', ';color:var(--styled-select-color,', ');box-sizing:border-box;display:inline-block;', ''], _defaults2.default.fontFamily, _defaults2.default.fontFamily, _defaults2.default.valueLabel__color, _defaults2.default.valueLabel__color, function (props) {
    return props.multi && 'padding: 1px 6px;';
  });
});
//# sourceMappingURL=SelectValueLabel.js.map