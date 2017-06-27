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
    global.SelectArrow = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n'], ['\n  box-sizing: border-box;\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject);
});
//# sourceMappingURL=SelectArrow.js.map