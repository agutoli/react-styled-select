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
    global.SelectControl = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: default;\n  border-spacing: 0;\n  border-collapse: separate;\n  outline: none;\n  overflow: hidden;\n  width: 100%;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n '], ['\n  display: flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: default;\n  border-spacing: 0;\n  border-collapse: separate;\n  outline: none;\n  overflow: hidden;\n  width: 100%;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n ']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');
  var g = (0, _cssHelpers.autoCssGenerator)('select-control');

  var isOpened = function isOpened() {
    return '\n  ' + g('border-color', 'focused') + '\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, g('border-color'), g('min-height'), globalCss('border-radius'), globalCss('border-style'), globalCss('border-width'), globalCss('background-color'), function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectControl.js.map