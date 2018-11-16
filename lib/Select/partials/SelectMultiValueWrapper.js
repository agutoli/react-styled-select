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
    global.SelectMultiValueWrapper = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: flex;\n\talign-items: center;\n  align-content: space-around;\n  flex: 2 100%;\n  flex-wrap: wrap;\n  outline: none;\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  display: flex;\n\talign-items: center;\n  align-content: space-around;\n  flex: 2 100%;\n  flex-wrap: wrap;\n  outline: none;\n  \n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-multi-value-wrapper');

  exports.default = _styledComponents2.default.div(_templateObject, g('padding'));
});
//# sourceMappingURL=SelectMultiValueWrapper.js.map