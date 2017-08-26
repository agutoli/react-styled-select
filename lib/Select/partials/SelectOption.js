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

  var g = (0, _cssHelpers.autoCssGenerator)('select-option');

  var isFocused = function isFocused() {
    return '\n  ' + g('color', 'focused') + '\n  ' + g('background-color', 'focused') + '\n';
  };

  var isSelected = function isSelected() {
    return '\n  ' + g('color', 'selected') + '\n  ' + g('background-color', 'selected') + '\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectOption'
  })(['box-sizing:border-box;', ' ', ' color:#666666;cursor:pointer;display:block;padding:8px 10px;', ' ', ' &:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px;}'], g('font-family'), g('background-color'), function (props) {
    return props.isFocused && isFocused();
  }, function (props) {
    return props.isSelected && isSelected();
  });
});
//# sourceMappingURL=SelectOption.js.map