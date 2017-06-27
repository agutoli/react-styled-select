(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.constants = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var KEY_UP = exports.KEY_UP = 38;
  var KEY_DOWN = exports.KEY_DOWN = 40;
  var KEY_ENTER = exports.KEY_ENTER = 13;
  var KEY_BACKSPACE = exports.KEY_BACKSPACE = 8;
  var KEY_ESC = exports.KEY_ESC = 27;
});
//# sourceMappingURL=constants.js.map