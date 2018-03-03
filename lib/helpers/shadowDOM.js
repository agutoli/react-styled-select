(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-shadow', '../polyfill'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-shadow'), require('../polyfill'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactShadow, global.polyfill);
    global.shadowDOM = mod.exports;
  }
})(this, function (exports, _react, _reactShadow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactShadow2 = _interopRequireDefault(_reactShadow);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  exports.default = function (element) {

    return function (_React$PureComponent) {
      _inherits(ShadowDOMHelper, _React$PureComponent);

      function ShadowDOMHelper(props) {
        _classCallCheck(this, ShadowDOMHelper);

        var _this = _possibleConstructorReturn(this, (ShadowDOMHelper.__proto__ || Object.getPrototypeOf(ShadowDOMHelper)).call(this, props));

        _this.applyStylesheet = function (classNameID) {
          var style = document.querySelector('[data-styled-components*=' + classNameID + ']');
          if (!style) return;
          try {
            _this.styleTag.innerHTML = '';
          } catch (e) {}
          _this.styleTag.appendChild(style.cloneNode(true));
        };

        _this.state = {
          stylesheet: false
        };
        return _this;
      }

      _createClass(ShadowDOMHelper, [{
        key: 'render',
        value: function render() {
          var _this2 = this;

          var stylesheet = this.state.stylesheet;

          return _react2.default.createElement(
            _reactShadow2.default,
            null,
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('span', { ref: function ref(n) {
                  return _this2.styleTag = n;
                } }),
              _react2.default.createElement(element, _extends({}, this.props, { generatedClassName: this.applyStylesheet }))
            )
          );
        }
      }]);

      return ShadowDOMHelper;
    }(_react2.default.PureComponent);
  };
});
//# sourceMappingURL=shadowDOM.js.map