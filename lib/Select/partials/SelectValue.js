(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components', '../cssHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'), require('../cssHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.cssHelpers);
    global.SelectValue = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: top;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  vertical-align: top;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');
  var g = (0, _cssHelpers.autoCssGenerator)('select-value');

  var SelectValue = _styledComponents2.default.div(_templateObject, g('color'), g('padding'), g('max-width'), g('overflow'), g('font-size'), g('text-overflow'), g('line-height'), g('white-space'));

  exports.default = function (props) {
    var _props = Object.assign({}, props);

    delete _props.onRemoveTag;

    return _react2.default.createElement(SelectValue, _props);
  };
});
//# sourceMappingURL=SelectValue.js.map