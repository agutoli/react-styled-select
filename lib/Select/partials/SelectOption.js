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

  var isFocused = function isFocused() {
    return '\n  color: #333;\n  color: var(--styled-select-option-focused-color, #333);\n  background-color: #f0f0f5;\n  background-color: var(--styled-select-option-focused-background-color, #f0f0f5);\n';
  };

  var isSelected = function isSelected() {
    return '\n  color: #333;\n  color: var(--styled-select-option-selected-color, #333);\n  background-color: #ddd;\n  background-color: var(--styled-select-option-selected-background-color, #ddd);\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectOption'
  })(['box-sizing:border-box;font-family:', ';font-family:var(--styled-select-option-font-family,', ');background-color:#fff;background-color:var(--styled-select-option-background-color,#fff);color:#666666;cursor:pointer;display:block;padding:8px 10px;', ' ', ' &:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px;}'], _defaults2.default.fontFamily, _defaults2.default.fontFamily, function (props) {
    return props.isFocused && isFocused();
  }, function (props) {
    return props.isSelected && isSelected();
  });
});
//# sourceMappingURL=SelectOption.js.map