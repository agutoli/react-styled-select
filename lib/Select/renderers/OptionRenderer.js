(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../partials/SelectOption'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../partials/SelectOption'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectOption);
    global.OptionRenderer = mod.exports;
  }
})(this, function (exports, _react, _SelectOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = OptionRenderer;

  var _react2 = _interopRequireDefault(_react);

  var _SelectOption2 = _interopRequireDefault(_SelectOption);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function OptionRenderer(option, index) {
    var style = {};
    if (option.virtualized) {
      style = {
        position: 'absolute',
        width: '100%',
        top: option.virtualizedOptionHeight * index + 'px',
        maxHeight: option.virtualizedOptionHeight + 'px',
        height: option.virtualizedOptionHeight + 'px'
      };
    }
    return _react2.default.createElement(
      _SelectOption2.default,
      {
        id: option.id,
        style: style,
        className: option.className,
        key: index,
        isSelected: option.isSelected,
        'aria-selected': option.isSelected,
        tabIndex: option.tabIndex,
        isFocused: option.isFocused,
        'data-key': option['data-key'],
        role: 'option',
        'data-select-option': option.value,
        onMouseOut: option.onMouseOut,
        onMouseOver: option.onMouseOver,
        onMouseDown: option.onMouseDown },
      option.label
    );
  }
});
//# sourceMappingURL=OptionRenderer.js.map