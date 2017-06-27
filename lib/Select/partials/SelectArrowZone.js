(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents);
    global.SelectArrowZone = mod.exports;
  }
})(this, function (exports, _styledComponents) {
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n'], ['\n  box-sizing: border-box;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject);
});
//# sourceMappingURL=SelectArrowZone.js.map