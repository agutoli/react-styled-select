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

  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');
  var g = (0, _cssHelpers.autoCssGenerator)('select-control');

  var isOpened = function isOpened() {
    return '\n  ' + g('border-color', 'focused') + '\n';
  };

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectControl'
  })(['display:flex;position:relative;align-items:center;box-sizing:border-box;cursor:default;border-spacing:0;border-collapse:separate;outline:none;overflow:hidden;width:100%;', ' ', ' ', ' ', ' ', ' ', ' ', ''], g('border-color'), g('min-height'), globalCss('border-radius'), globalCss('border-style'), globalCss('border-width'), globalCss('background-color'), function (props) {
    return props.isOpened && isOpened();
  });
});
//# sourceMappingURL=SelectControl.js.map