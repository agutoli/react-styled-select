(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['@webcomponents/shadydom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('@webcomponents/shadydom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.shadydom);
    global.polyfill = mod.exports;
  }
})(this, function () {
  "use strict";

  if (typeof global != "undefined") {
    var MockMutationObserver = function MockMutationObserver() {
      return {
        observe: function observe() {}
      };
    };
    if (!global.document) {
      global.document = {
        documentElement: {}
      };
    }
    global.MutationObserver = window.MutationObserver || MockMutationObserver;
  }
});
//# sourceMappingURL=polyfill.js.map