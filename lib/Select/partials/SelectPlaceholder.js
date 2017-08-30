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
    global.SelectPlaceholder = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  text-overflow: ellipsis;\n  position: absolute;\n  display: inline-block;\n  white-space: nowrap;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 100%;\n  overflow: hidden;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  text-overflow: ellipsis;\n  position: absolute;\n  display: inline-block;\n  white-space: nowrap;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  max-width: 100%;\n  overflow: hidden;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-placeholder');

  exports.default = _styledComponents2.default.div(_templateObject, g('color'), g('padding'), g('font-size'), g('font-family'), g('line-height'));
});
//# sourceMappingURL=SelectPlaceholder.js.map