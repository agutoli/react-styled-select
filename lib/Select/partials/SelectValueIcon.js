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
    global.SelectValueIcon = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  border-right: 1px solid;\n  display: inline-block;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n    cursor: pointer;\n  }\n'], ['\n  box-sizing: border-box;\n  border-right: 1px solid;\n  display: inline-block;\n\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n    cursor: pointer;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-value-icon');

  exports.default = _styledComponents2.default.div(_templateObject, g('color'), g('padding'), g('font-family'), g('background-color'), g('background-color', 'hover'));
});
//# sourceMappingURL=SelectValueIcon.js.map