(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.cssVariables = mod.exports;
  }
})(this, function (module) {
  'use strict';

  var fontFamily = 'Tahoma, Helvetica, Arial, sans-serif';

  module.exports = {
    'select__box-sizing': 'border-box',
    'select__position': 'relative',
    'select__color': '#777',
    'select__background-color': '#fff',
    'select__border-radius': '2px',
    'select__border-style': 'solid',
    'select__border-width': '1px',
    'select__opacity--disabled': '0.5',
    'select__cursor--disabled': 'not-allowed',
    'select__pointer-events--disabled': 'none',

    'select-arrow__size': 8,
    'select-arrow__color': '#9b9ba5',

    'select-arrow-zone__width': '25px',

    'select-clear__color': '#999',
    'select-clear__font-size': '14px',

    'select-clear-zone__width': '17px',

    'select-control__min-height': '36px',
    'select-control__border-color': '#dcdce3',
    'select-control__border-color--focused': '#40a3f5',
    'select-control__cursor--disabled': 'not-allowed',

    'select-input__height': '23px',
    'select-input__padding': '0',
    'select-input__line-height': '23px',

    'select-menu__max-height': '198px',

    'select-menu-outer__max-height': '200px',
    'select-menu-outer__background-color': '#fff',
    'select-menu-outer__border-color': '#f0f0f5',
    'select-menu-outer__border-radius': '2px',
    'select-menu-outer__border-style': 'solid',
    'select-menu-outer__border-width': '1px',
    'select-menu-outer__box-shadow': '0 2px 4px rgba(0, 0, 0, 0.05)',

    'select-menu-outer__margin': '5px 0 0 0',
    'select-menu-outer__padding': '0',

    'select-no-results__color': '#999',
    'select-no-results__padding': '8px 10px',
    'select-no-results__font-size': '14px',
    'select-no-results__font-family': fontFamily,

    'select-option__color': '#777',
    'select-option__padding': '8px 10px',
    'select-option__font-family': fontFamily,
    'select-option__color--focused': '#333',
    'select-option__color--selected': '#333',
    'select-option__background-color': '#fff',
    'select-option__background-color--focused': '#f0f0f5',
    'select-option__background-color--selected': '#ddd',

    'select-placeholder__padding': '0 10px',
    'select-placeholder__color': '#d2d2d9',
    'select-placeholder__font-family': fontFamily,
    'select-placeholder__font-size': '12px',
    'select-placeholder__line-height': '34px',

    'select-value__color': fontFamily,
    'select-value__line-height': '34px',
    'select-value__font-size': '14px',
    'select-value__max-width': '100%',
    'select-value__overflow': 'hidden',
    'select-value__padding': '0 5px',
    'select-value__text-overflow': 'ellipsis',
    'select-value__white-space': 'nowrap',

    'select-value-label__padding': '1px 6px',
    'select-value-label__font-family': fontFamily,

    'select-value-icon__background-color': 'transparent',
    'select-value-icon__background-color--hover': 'rgba(0, 0, 0, 0.1)',
    'select-value-icon__font-family': 'arial',
    'select-value-icon__padding': '1px 5px',

    'select-multi-value__font-size': '0.9em',
    'select-multi-value__line-height': '1.4',
    'select-multi-value__margin': '2px 5px 2px 0',
    'select-multi-value__background-color': '#eee',
    'select-multi-value__border': '1px solid #aaa',
    'select-multi-value__border--hover': '1px solid #777',
    'select-multi-value__border-radius': '3px',
    'select-multi-value__box-shadow': 'rgba(0,0,0,0.2) 0px 0px 3px',

    'select-multi-value-wrapper__padding': '3px 0 3px 5px'
  };
});
//# sourceMappingURL=cssVariables.js.map