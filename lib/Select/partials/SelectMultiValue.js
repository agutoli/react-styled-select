(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components', './SelectValueIcon', '../cssHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'), require('./SelectValueIcon'), require('../cssHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.SelectValueIcon, global.cssHelpers);
    global.SelectMultiValue = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _SelectValueIcon, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _SelectValueIcon2 = _interopRequireDefault(_SelectValueIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  overflow: hidden;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n  }\n'], ['\n  overflow: hidden;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    ', '\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var g = (0, _cssHelpers.autoCssGenerator)('select-multi-value');

  var SelectMultiValue = _styledComponents2.default.div(_templateObject, g('border'), g('font-size'), g('margin'), g('box-shadow'), g('line-height'), g('border-radius'), g('background-color'), g('border', 'hover'));

  exports.default = function (props) {
    return _react2.default.createElement(
      SelectMultiValue,
      props,
      _react2.default.createElement(
        _SelectValueIcon2.default,
        { onMouseDown: function onMouseDown(e) {
            return props.onRemoveTag(props, e);
          } },
        '\xD7'
      ),
      props.children
    );
  };
});
//# sourceMappingURL=SelectMultiValue.js.map