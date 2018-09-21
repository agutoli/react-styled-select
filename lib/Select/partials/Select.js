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
    global.Select = mod.exports;
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

  var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n\n  ', '\n'], ['\n  ', '\n  ', '\n\n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select');

  var isDisabled = function isDisabled() {
    return '\n  ' + g('cursor', 'disabled') + '\n  ' + g('opacity', 'disabled') + '\n  > * {\n    ' + g('pointer-events', 'disabled') + '\n  }\n';
  };

  exports.default = _styledComponents2.default.div(_templateObject, g('box-sizing'), g('position'), function (props) {
    return props.disabled && isDisabled();
  });
});
//# sourceMappingURL=Select.js.map