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
    global.SelectValue = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  color: var(--styled-select-value-color, ', ');\n\n  line-height: ', ';\n  line-height: var(--styled-select-value-line-height, ', ');\n\n  padding: ', ';\n  padding: var(--styled-select-value-padding, ', ');\n\n  max-width: ', ';\n  max-width: var(--styled-select-value-max-width, ', ');\n\n  overflow: ', ';\n  overflow: var(--styled-select-value-overflow, ', ');\n\n  text-overflow: ', ';\n  text-overflow: var(--styled-select-value-text-overflow, ', ');\n\n  white-space: ', ';\n  white-space: var(--styled-select-value-white-space, ', ');\n  display: inline-block;\n  vertical-align: top;\n'], ['\n  color: ', ';\n  color: var(--styled-select-value-color, ', ');\n\n  line-height: ', ';\n  line-height: var(--styled-select-value-line-height, ', ');\n\n  padding: ', ';\n  padding: var(--styled-select-value-padding, ', ');\n\n  max-width: ', ';\n  max-width: var(--styled-select-value-max-width, ', ');\n\n  overflow: ', ';\n  overflow: var(--styled-select-value-overflow, ', ');\n\n  text-overflow: ', ';\n  text-overflow: var(--styled-select-value-text-overflow, ', ');\n\n  white-space: ', ';\n  white-space: var(--styled-select-value-white-space, ', ');\n  display: inline-block;\n  vertical-align: top;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.value__color, _defaults2.default.value__color, _defaults2.default.value__lineHeight, _defaults2.default.value__lineHeight, _defaults2.default.value__padding, _defaults2.default.value__padding, _defaults2.default.value__maxWidth, _defaults2.default.value__maxWidth, _defaults2.default.value__overflow, _defaults2.default.value__overflow, _defaults2.default.value__textOverflow, _defaults2.default.value__textOverflow, _defaults2.default.value__whiteSpace, _defaults2.default.value__whiteSpace);
});
//# sourceMappingURL=SelectValue.js.map