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

  var isOpened = function isOpened() {
    return '\n  border-color: ' + _defaults2.default.control__focused__borderColor + '; /* fallback */\n  border-color: var(--styled-select-control-focused-border-color, ' + _defaults2.default.control__focused__borderColor + ');\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectControl'
  })(['display:flex;align-items:center;box-sizing:border-box;background-color:#fff;background-color:var(--styled-select-background-color,#fff);border-color:', ';border-color:var(--styled-select-control-border-color,', ');', ' border-width:1px;border-width:var(--styled-select-border-width,1px);border-style:solid;border-style:var(--styled-select-border-style,solid);border-radius:2px;border-radius:var(--styled-select-border-radius,2px);color:#333;cursor:default;border-spacing:0;border-collapse:separate;min-height:36px;outline:none;overflow:hidden;position:relative;width:100%;'], _defaults2.default.control__borderColor, _defaults2.default.control__borderColor, function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectControl.js.map