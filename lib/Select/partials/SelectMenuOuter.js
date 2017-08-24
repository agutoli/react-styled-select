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

  exports.default = _styledComponents2.default.div.withConfig({
    displayName: 'SelectMenuOuter'
  })(['box-sizing:border-box;border-radius:2px;border-radius:var(--styled-select-menu-outer-border-radius,2px);background-color:#fff;background-color:var(--styled-select-menu-outer-background-color,#fff);border-color:#f0f0f5;border-color:var(--styled-select-menu-outer-border-color,#f0f0f5);border-width:1px;border-width:var(--styled-select-menu-outer-border-width,1px);border-style:solid;border-style:var(--styled-select-menu-outer-border-style,solid);box-shadow:0 2px 4px rgba(0,0,0,0.05);box-sizing:border-box;margin:5px 0 0 0;margin:var(--styled-select-menu-outer-margin,5px 0 0 0);padding:0;padding:var(--styled-select-menu-outer-padding,0);max-height:200px;position:absolute;top:100%;width:100%;z-index:1;']);
});
//# sourceMappingURL=SelectMenuOuter.js.map