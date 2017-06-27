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
    global.SelectClearZone = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  color: ', ';\n  color: var(--styled-select-clear-font-size, ', ');\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n'], ['\n  box-sizing: border-box;\n  color: ', ';\n  color: var(--styled-select-clear-font-size, ', ');\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.clearZone__color, _defaults2.default.clearZone__color);
});
//# sourceMappingURL=SelectClearZone.js.map