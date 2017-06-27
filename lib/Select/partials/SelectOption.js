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
    global.SelectOption = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n'], ['\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var isFocused = function isFocused() {
    return '\n  color: #333;\n  background-color: rgba(0, 126, 255, 0.08);\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, function (props) {
    return props.isSelected && 'background: yellow;';
  }, function (props) {
    return props.isFocused && isFocused();
  }, isFocused());
});
//# sourceMappingURL=SelectOption.js.map