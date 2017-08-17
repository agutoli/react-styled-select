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
    global.SelectMenuOuter = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  border-radius: 2px;\n  border-radius: var(--styled-select-menu-outer-border-radius, 2px);\n\n  background-color: #fff;\n  background-color: var(--styled-select-menu-outer-background-color, #fff);\n\n  border-color:  #f0f0f5;\n  border-color: var(--styled-select-menu-outer-border-color, #f0f0f5);\n\n  border-width: 1px;\n  border-width: var(--styled-select-menu-outer-border-width, 1px);\n\n  border-style: solid;\n  border-style: var(--styled-select-menu-outer-border-style, solid);\n\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n\n  margin: 5px 0 0 0;\n  margin: var(--styled-select-menu-outer-margin, 5px 0 0 0);\n\n  padding: 0;\n  padding: var(--styled-select-menu-outer-padding, 0);\n\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n'], ['\n  box-sizing: border-box;\n  border-radius: 2px;\n  border-radius: var(--styled-select-menu-outer-border-radius, 2px);\n\n  background-color: #fff;\n  background-color: var(--styled-select-menu-outer-background-color, #fff);\n\n  border-color:  #f0f0f5;\n  border-color: var(--styled-select-menu-outer-border-color, #f0f0f5);\n\n  border-width: 1px;\n  border-width: var(--styled-select-menu-outer-border-width, 1px);\n\n  border-style: solid;\n  border-style: var(--styled-select-menu-outer-border-style, solid);\n\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  box-sizing: border-box;\n\n  margin: 5px 0 0 0;\n  margin: var(--styled-select-menu-outer-margin, 5px 0 0 0);\n\n  padding: 0;\n  padding: var(--styled-select-menu-outer-padding, 0);\n\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  exports.default = _styledComponents2.default.div(_templateObject);
});
//# sourceMappingURL=SelectMenuOuter.js.map