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
    global.SelectInput = mod.exports;
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
    displayName: 'SelectInput'
  })(['height:', ';height:var(--styled-select-input-height,', ');padding:', ';padding:var(--styled-select-input-padding,', ');vertical-align:middle;display:inline-table;margin:0;'], _defaults2.default.input__height, _defaults2.default.input__height, _defaults2.default.input__padding, _defaults2.default.input__padding);
});
//# sourceMappingURL=SelectInput.js.map