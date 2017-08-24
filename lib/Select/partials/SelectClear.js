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
    global.SelectClear = mod.exports;
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
    displayName: 'SelectClear'
  })(['font-family:', ';font-family:var(--styled-select-clear-font-family,', ');font-size:', ';font-size:var(--styled-select-clear-font-size,', ');box-sizing:border-box;display:inline-block;line-height:1;'], _defaults2.default.fontFamily, _defaults2.default.fontFamily, _defaults2.default.clear__fontSize, _defaults2.default.clear__fontSize);
});
//# sourceMappingURL=SelectClear.js.map