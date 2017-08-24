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
    global.SelectOption = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n\n  font-family: ', ';\n  font-family: var(--styled-select-option-font-family, ', ');\n\n  background-color: #fff;\n  background-color: var(--styled-select-option-background-color, #fff);\n\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n\n  ', '\n  ', '\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n'], ['\n  box-sizing: border-box;\n\n  font-family: ', ';\n  font-family: var(--styled-select-option-font-family, ', ');\n\n  background-color: #fff;\n  background-color: var(--styled-select-option-background-color, #fff);\n\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n\n  ', '\n  ', '\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var isFocused = function isFocused() {
    return '\n  color: #333;\n  color: var(--styled-select-option-focused-color, #333);\n  background-color: #f0f0f5;\n  background-color: var(--styled-select-option-focused-background-color, #f0f0f5);\n';
  };

  var isSelected = function isSelected() {
    return '\n  color: #333;\n  color: var(--styled-select-option-selected-color, #333);\n  background-color: #ddd;\n  background-color: var(--styled-select-option-selected-background-color, #ddd);\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.fontFamily, _defaults2.default.fontFamily, function (props) {
    return props.isFocused && isFocused();
  }, function (props) {
    return props.isSelected && isSelected();
  });
});
//# sourceMappingURL=SelectOption.js.map