(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components', '../defaults.js', './SelectValueIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'), require('../defaults.js'), require('./SelectValueIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.defaults, global.SelectValueIcon);
    global.SelectMultiValue = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _defaults, _SelectValueIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _defaults2 = _interopRequireDefault(_defaults);

  var _SelectValueIcon2 = _interopRequireDefault(_SelectValueIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SelectMultiValue = _styledComponents2.default.div.withConfig({
    displayName: 'SelectMultiValue__SelectMultiValue'
  })(['background-color:#ebf5ff;background-color:rgba(0,126,255,0.08);border-radius:2px;border:1px solid #c2e0ff;border:1px solid rgba(0,126,255,0.24);font-size:0.9em;line-height:1.4;margin-right:5px;margin-top:2px;margin-bottom:2px;box-shadow:rgba(0,0,0,0.2) 0px 0px 3px;&:hover{border:1px solid #aaa;}']);

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