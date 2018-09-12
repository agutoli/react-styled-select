(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', './SelectInputField'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('./SelectInputField'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.SelectInputField);
    global.SelectInputFieldSize = mod.exports;
  }
})(this, function (exports, _styledComponents, _SelectInputField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _SelectInputField2 = _interopRequireDefault(_SelectInputField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  visibility: hidden;\n  height: 0px;\n  white-space: pre;\n'], ['\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  visibility: hidden;\n  height: 0px;\n  white-space: pre;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = (0, _styledComponents2.default)(_SelectInputField2.default.withComponent('div'))(_templateObject);
});
//# sourceMappingURL=SelectInputFieldSize.js.map