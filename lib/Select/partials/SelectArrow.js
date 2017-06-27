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
    global.SelectArrow = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  font-family: ', ';\n  font-family: var(--styled-select-arrow-font-family, ', ');\n\n  border-style: none;\n\n  /* FALLBACK */\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-right-color: ', ';\n  border-bottom-color: ', ';\n  /* FALLBACK */\n\n  border-right: 1px var(--styled-select-arrow-color, ', ') solid;\n  border-bottom: 1px var(--styled-select-arrow-color, ', ') solid;\n\n  border-bottom-right-radius: 25%;\n  transform: translateY(-25%) rotate(45deg);\n\n  ', '\n\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n  position: relative;\n'], ['\n  box-sizing: border-box;\n  font-family: ', ';\n  font-family: var(--styled-select-arrow-font-family, ', ');\n\n  border-style: none;\n\n  /* FALLBACK */\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-right-width: 1px;\n  border-bottom-width: 1px;\n  border-right-color: ', ';\n  border-bottom-color: ', ';\n  /* FALLBACK */\n\n  border-right: 1px var(--styled-select-arrow-color, ', ') solid;\n  border-bottom: 1px var(--styled-select-arrow-color, ', ') solid;\n\n  border-bottom-right-radius: 25%;\n  transform: translateY(-25%) rotate(45deg);\n\n  ', '\n\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n  position: relative;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var isOpened = function isOpened() {
    return '\n  transform: translateY(18%) rotate(-134deg);\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.fontFamily, _defaults2.default.fontFamily, _defaults2.default.arrow__color, _defaults2.default.arrow__color, _defaults2.default.arrow__color, _defaults2.default.arrow__color, function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectArrow.js.map