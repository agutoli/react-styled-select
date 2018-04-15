(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.Async = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var SelectAsync = function (_React$PureComponent) {
    _inherits(SelectAsync, _React$PureComponent);

    function SelectAsync(props) {
      _classCallCheck(this, SelectAsync);

      var _this = _possibleConstructorReturn(this, (SelectAsync.__proto__ || Object.getPrototypeOf(SelectAsync)).call(this, props));

      _this.loadOptions = function (term) {
        var loadOptions = _this.props.loadOptions;


        var callback = function callback(error, data) {
          var options = data && data.options || [];
          if (callback === _this._callback) {
            _this._callback = null;
            _this.setState({
              isLoading: false,
              options: options
            });
          }
        };

        _this._callback = callback;

        var promise = loadOptions(term, callback);

        if (promise) {
          promise.then(function (data) {
            return callback(null, data);
          }, function (error) {
            return callback(error);
          });
        }

        if (_this._callback && !_this.state.isLoading) {
          _this.setState({
            isLoading: true
          });
        }
      };

      _this.state = {
        isLoading: false,
        options: props.options
      };
      return _this;
    }

    _createClass(SelectAsync, [{
      key: 'render',
      value: function render() {
        return _react2.default.cloneElement(this.props.children, Object.assign({}, this.props, {
          options: this.state.options,
          onTyping: this.loadOptions
        }));
      }
    }]);

    return SelectAsync;
  }(_react2.default.PureComponent);

  SelectAsync.propTypes = {
    autoload: _propTypes2.default.bool.isRequired,
    ignoreAccents: _propTypes2.default.bool,
    ignoreCase: _propTypes2.default.bool,
    loadOptions: _propTypes2.default.func.isRequired
  };

  SelectAsync.defaultProps = {
    loadOptions: function loadOptions() {}
  };

  exports.default = SelectAsync;
});
//# sourceMappingURL=Async.js.map