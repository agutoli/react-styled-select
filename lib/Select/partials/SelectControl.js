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
    global.SelectControl = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  display: table;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: #fff;\n  background-color: var(--styled-select-background-color, #fff);\n\n  border-color: ', '; /* fallback */\n  border-color: var(--styled-select-control-border-color, ', ');\n\n  ', '\n\n  border-width: 1px; /* fallback */\n  border-width: var(--styled-select-border-width, 1px);\n\n  border-style: solid; /* fallback */\n  border-style: var(--styled-select-border-style, solid);\n\n  border-radius: 2px;\n  border-radius: var(--styled-select-border-radius, 2px);\n\n  color: #333;\n  cursor: default;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n '], ['\n  display: table;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: #fff;\n  background-color: var(--styled-select-background-color, #fff);\n\n  border-color: ', '; /* fallback */\n  border-color: var(--styled-select-control-border-color, ', ');\n\n  ', '\n\n  border-width: 1px; /* fallback */\n  border-width: var(--styled-select-border-width, 1px);\n\n  border-style: solid; /* fallback */\n  border-style: var(--styled-select-border-style, solid);\n\n  border-radius: 2px;\n  border-radius: var(--styled-select-border-radius, 2px);\n\n  color: #333;\n  cursor: default;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n ']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var isOpened = function isOpened() {
    return '\n  border-color: ' + _defaults2.default.control__focused__borderColor + '; /* fallback */\n  border-color: var(--styled-select-control-focused-border-color, ' + _defaults2.default.control__focused__borderColor + ');\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, _defaults2.default.control__borderColor, _defaults2.default.control__borderColor, function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectControl.js.map