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
    global.SelectArrow = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n\n  ', '\n  ', '\n\n  border-style: none;\n\n  /* FALLBACK */\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-right-color: ', ';\n  border-bottom-color: ', ';\n  /* FALLBACK */\n\n  border-right: 1px ', ' solid;\n  border-right: 1px var(--styled-select-arrow__color, ', ') solid;\n  border-bottom: 1px ', ' solid;\n  border-bottom: 1px var(--styled-select-arrow__color, ', ') solid;\n\n  border-bottom-right-radius: 25%;\n  transform: rotate(45deg);\n\n  ', '\n\n  height: ', 'px;\n  width: ', 'px;\n'], ['\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n\n  ', '\n  ', '\n\n  border-style: none;\n\n  /* FALLBACK */\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-right-color: ', ';\n  border-bottom-color: ', ';\n  /* FALLBACK */\n\n  border-right: 1px ', ' solid;\n  border-right: 1px var(--styled-select-arrow__color, ', ') solid;\n  border-bottom: 1px ', ' solid;\n  border-bottom: 1px var(--styled-select-arrow__color, ', ') solid;\n\n  border-bottom-right-radius: 25%;\n  transform: rotate(45deg);\n\n  ', '\n\n  height: ', 'px;\n  width: ', 'px;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var v = (0, _cssHelpers.cssVar)('select-arrow');
  var g = (0, _cssHelpers.autoCssGenerator)('select-arrow');

  var isOpened = function isOpened() {
    return '\n  margin-top: ' + v('size') / 2 + 'px;\n  transform: rotate(-134deg);\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, g('border-right'), g('font-family'), v('color'), v('color'), v('color'), v('color'), v('color'), v('color'), function (props) {
    return props.isOpened && isOpened();
  }, v('size'), v('size'));
});
//# sourceMappingURL=SelectArrow.js.map