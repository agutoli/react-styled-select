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
    global.SelectOption = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  ', '\n  ', '\n  ', '\n  ', '\n\n  cursor: pointer;\n  display: block;\n\n  ', '\n  ', '\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n'], ['\n  box-sizing: border-box;\n  ', '\n  ', '\n  ', '\n  ', '\n\n  cursor: pointer;\n  display: block;\n\n  ', '\n  ', '\n\n  &:last-child {\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-option');

  var isFocused = function isFocused() {
    return '\n  ' + g('color', 'focused') + '\n  ' + g('background-color', 'focused') + '\n';
  };

  var isSelected = function isSelected() {
    return '\n  ' + g('color', 'selected') + '\n  ' + g('background-color', 'selected') + '\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, g('color'), g('padding'), g('font-family'), g('background-color'), function (props) {
    return props.isFocused && isFocused();
  }, function (props) {
    return props.isSelected && isSelected();
  });
});
//# sourceMappingURL=SelectOption.js.map