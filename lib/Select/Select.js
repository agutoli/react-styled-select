(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'styled-components', 'react-click-outside', 'uuid', './constants', './partials/Select', './partials/SelectMenu', './partials/SelectValue', './partials/SelectClear', './partials/SelectArrow', './partials/SelectInput', './partials/SelectInputField', './partials/SelectOption', './partials/SelectControl', './partials/SelectClearZone', './partials/SelectArrowZone', './partials/SelectValueLabel', './partials/SelectMenuOuter', './partials/SelectPlaceholder', './partials/SelectMultiValueWrapper', './functions/stringifyValue'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('styled-components'), require('react-click-outside'), require('uuid'), require('./constants'), require('./partials/Select'), require('./partials/SelectMenu'), require('./partials/SelectValue'), require('./partials/SelectClear'), require('./partials/SelectArrow'), require('./partials/SelectInput'), require('./partials/SelectInputField'), require('./partials/SelectOption'), require('./partials/SelectControl'), require('./partials/SelectClearZone'), require('./partials/SelectArrowZone'), require('./partials/SelectValueLabel'), require('./partials/SelectMenuOuter'), require('./partials/SelectPlaceholder'), require('./partials/SelectMultiValueWrapper'), require('./functions/stringifyValue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styledComponents, global.reactClickOutside, global.uuid, global.constants, global.Select, global.SelectMenu, global.SelectValue, global.SelectClear, global.SelectArrow, global.SelectInput, global.SelectInputField, global.SelectOption, global.SelectControl, global.SelectClearZone, global.SelectArrowZone, global.SelectValueLabel, global.SelectMenuOuter, global.SelectPlaceholder, global.SelectMultiValueWrapper, global.stringifyValue);
    global.Select = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styledComponents, _reactClickOutside, _uuid, _constants, _Select, _SelectMenu, _SelectValue, _SelectClear, _SelectArrow, _SelectInput, _SelectInputField, _SelectOption, _SelectControl, _SelectClearZone, _SelectArrowZone, _SelectValueLabel, _SelectMenuOuter, _SelectPlaceholder, _SelectMultiValueWrapper, _stringifyValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

  var _uuid2 = _interopRequireDefault(_uuid);

  var _Select2 = _interopRequireDefault(_Select);

  var _SelectMenu2 = _interopRequireDefault(_SelectMenu);

  var _SelectValue2 = _interopRequireDefault(_SelectValue);

  var _SelectClear2 = _interopRequireDefault(_SelectClear);

  var _SelectArrow2 = _interopRequireDefault(_SelectArrow);

  var _SelectInput2 = _interopRequireDefault(_SelectInput);

  var _SelectInputField2 = _interopRequireDefault(_SelectInputField);

  var _SelectOption2 = _interopRequireDefault(_SelectOption);

  var _SelectControl2 = _interopRequireDefault(_SelectControl);

  var _SelectClearZone2 = _interopRequireDefault(_SelectClearZone);

  var _SelectArrowZone2 = _interopRequireDefault(_SelectArrowZone);

  var _SelectValueLabel2 = _interopRequireDefault(_SelectValueLabel);

  var _SelectMenuOuter2 = _interopRequireDefault(_SelectMenuOuter);

  var _SelectPlaceholder2 = _interopRequireDefault(_SelectPlaceholder);

  var _SelectMultiValueWrapper2 = _interopRequireDefault(_SelectMultiValueWrapper);

  var _stringifyValue2 = _interopRequireDefault(_stringifyValue);

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

  var WrapperSelect = function (_React$PureComponent) {
    _inherits(WrapperSelect, _React$PureComponent);

    function WrapperSelect(props) {
      _classCallCheck(this, WrapperSelect);

      var _this = _possibleConstructorReturn(this, (WrapperSelect.__proto__ || Object.getPrototypeOf(WrapperSelect)).call(this, props));

      _this.onClearValue = function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.resetField();
      };

      _this.onSelectValue = function (newValue, event) {
        var value = _this.state.value;

        var label = _this.optionsMap[newValue].label;
        if (value != newValue) {
          _this.setState({
            value: newValue,
            valueLabel: label
          }, function () {
            _this.props.onChange(newValue);
          });
        }
        _this.closeOptions();
        _this.props.onValueClick(newValue, event);
      };

      _this.onSelectFocused = function () {
        _this.openOptions();
        _this.setState({
          isFocused: true
        });
        _this.setFocus();
      };

      _this.onSearching = function (event) {
        var _this$state = _this.state,
            focusedIndex = _this$state.focusedIndex,
            options = _this$state.options,
            isOpened = _this$state.isOpened;


        setTimeout(function () {
          var filteredOptions = _this.props.options.filter(function (opt) {
            var label = opt.label.toLowerCase();
            var term = _this.inputInnerRef.value.toLowerCase();
            return label.indexOf(term) !== -1;
          });
          _this.setState({ searchTerm: _this.inputInnerRef.value, options: filteredOptions });
        }, 1);

        var lastIndex = options.length - 1;
        switch (event.keyCode) {
          case _constants.KEY_BACKSPACE:
            // backspace
            if (!_this.inputInnerRef.value) {
              _this.resetField();
            }
          case _constants.KEY_UP:
            _this.setState({
              focusedIndex: focusedIndex <= 0 ? lastIndex : focusedIndex - 1
            });
            return;
          case _constants.KEY_DOWN:
            if (!isOpened) {
              _this.openOptions();
              return;
            }

            _this.setState({
              focusedIndex: focusedIndex >= lastIndex ? 0 : focusedIndex + 1
            });
            return;
          case _constants.KEY_ENTER:
            if (!options.length) return;
            var newValue = options[focusedIndex].value;
            _this.onSelectValue(newValue, event);
            return;
          case _constants.KEY_ESC:
            _this.closeOptions();
        }
      };

      _this.optionsMap = props.options.reduce(function (agregate, current) {
        agregate[current.value] = current;
        return agregate;
      }, {});

      var valueLabel = null;
      if (props.value && _this.optionsMap.hasOwnProperty(props.value)) {
        valueLabel = _this.optionsMap[props.value].label;
      }

      _this.state = {
        isOpened: false,
        isFocused: false,
        isSelected: false,
        value: props.value,
        valueLabel: valueLabel,
        searchTerm: null,
        focusedIndex: 0,
        options: props.options,
        'aria-owns': _this.props['aria-owns'] || _uuid2.default.v4()
      };

      _this.inputInnerRef = null;
      return _this;
    }

    _createClass(WrapperSelect, [{
      key: 'openOptions',
      value: function openOptions() {
        this.setState({ isOpened: true });
      }
    }, {
      key: 'closeOptions',
      value: function closeOptions() {
        this.setState({ isOpened: false });
        this.props.onClose();
      }
    }, {
      key: 'setFocus',
      value: function setFocus() {
        var _this2 = this;

        setTimeout(function () {
          _this2.inputInnerRef && _this2.inputInnerRef.focus();
        }, 10);
      }
    }, {
      key: 'handleClickOutside',
      value: function handleClickOutside(event) {
        if (event.target.tagName === 'HTML' || event.target.tagName === 'DIV') {
          if (this.state.isOpened) {
            this.closeOptions();
          }
        }
      }
    }, {
      key: 'resetField',
      value: function resetField() {
        var _this3 = this;

        this.setState({ value: null, searchTerm: null }, function () {
          _this3.closeOptions();
          _this3.inputInnerRef.value = '';
          _this3.props.onInputClear();
        });
      }
    }, {
      key: 'renderSelectMultiValueWrapper',
      value: function renderSelectMultiValueWrapper() {
        var _this4 = this;

        var _props = this.props,
            placeholder = _props.placeholder,
            classes = _props.classes;
        var _state = this.state,
            value = _state.value,
            isOpened = _state.isOpened,
            isSelected = _state.isSelected,
            valueLabel = _state.valueLabel,
            searchTerm = _state.searchTerm;


        var content = '';

        if (value && !searchTerm) {
          content = _react2.default.createElement(
            _SelectValue2.default,
            { className: classes.selectValue, 'data-select-value': true },
            _react2.default.createElement(
              _SelectValueLabel2.default,
              {
                className: classes.selectValueLabel,
                'data-select-value-label': true },
              valueLabel
            )
          );
        }

        if (!value && !searchTerm) {
          content = _react2.default.createElement(
            _SelectPlaceholder2.default,
            {
              className: classes.selectPlaceholder,
              'data-select-placeholder': true },
            placeholder
          );
        }

        return _react2.default.createElement(
          _SelectMultiValueWrapper2.default,
          {
            className: classes.selectMultiValueWrapper,
            'data-select-multi-value-wrapper': true },
          content,
          _react2.default.createElement(
            _SelectInput2.default,
            { 'data-select-input': true, className: classes.selectInput },
            _react2.default.createElement(_SelectInputField2.default, {
              className: classes.selectInputField,
              'data-select-input-search': true,
              onKeyDown: this.onSearching,
              innerRef: function innerRef(n) {
                return _this4.inputInnerRef = n;
              },
              'aria-expanded': isOpened,
              'aria-autocomplete': 'list',
              'aria-owns': this.state['aria-owns'],
              role: 'combobox', type: 'text' })
          )
        );
      }
    }, {
      key: 'renderSelectMenuOuter',
      value: function renderSelectMenuOuter() {
        var _this5 = this;

        var _props2 = this.props,
            onOpen = _props2.onOpen,
            classes = _props2.classes;
        var _state2 = this.state,
            value = _state2.value,
            isOpened = _state2.isOpened,
            focusedIndex = _state2.focusedIndex,
            options = _state2.options;


        if (!isOpened) return;

        onOpen();

        return _react2.default.createElement(
          _SelectMenuOuter2.default,
          {
            className: classes.selectMenuOuter,
            'data-select-menu-outer': true },
          _react2.default.createElement(
            _SelectMenu2.default,
            {
              role: 'listbox',
              id: this.state['aria-owns'],
              className: classes.selectMenu, 'data-select-menu': true },
            options.map(function (opt, i) {
              return _react2.default.createElement(
                _SelectOption2.default,
                {
                  className: classes.selectOption,
                  key: i,
                  isSelected: value === opt.value,
                  'aria-selected': value === opt.value,
                  isFocused: focusedIndex === i,
                  role: 'option',
                  'data-select-option': opt.value,
                  onMouseDown: function onMouseDown(e) {
                    return _this5.onSelectValue(opt.value, e);
                  } },
                opt.label
              );
            })
          )
        );
      }
    }, {
      key: 'renderSelectClearZone',
      value: function renderSelectClearZone() {
        var _props3 = this.props,
            clearable = _props3.clearable,
            classes = _props3.classes;


        if (!clearable) return;

        return _react2.default.createElement(
          _SelectClearZone2.default,
          {
            className: classes.selectClearZone,
            'data-select-clear-zone': true, onMouseDown: this.onClearValue },
          _react2.default.createElement(
            _SelectClear2.default,
            {
              className: classes.selectClear, 'data-select-clear': true },
            'x'
          )
        );
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.props.generatedClassName(this.selectNode.state.generatedClassName);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this6 = this;

        var _props4 = this.props,
            name = _props4.name,
            disabled = _props4.disabled,
            className = _props4.className,
            classes = _props4.classes;
        var _state3 = this.state,
            value = _state3.value,
            isSelected = _state3.isSelected,
            isOpened = _state3.isOpened;

        return _react2.default.createElement(
          _Select2.default,
          { 'data-select': true, className: className,
            ref: function ref(node) {
              return _this6.selectNode = node;
            }, innerRef: function innerRef(node) {
              return _this6.selectInnerRef = node;
            } },
          _react2.default.createElement('input', { type: 'hidden', name: name, value: (0, _stringifyValue2.default)(value), disabled: disabled }),
          _react2.default.createElement(
            _SelectControl2.default,
            {
              isOpened: isOpened,
              'aria-haspopup': isOpened,
              className: classes.selectControl,
              'data-select-control': true, onMouseDown: this.onSelectFocused },
            this.renderSelectMultiValueWrapper(),
            this.renderSelectClearZone(),
            _react2.default.createElement(
              _SelectArrowZone2.default,
              {
                className: classes.selectArrowZone, 'data-select-arrow-zone': true },
              _react2.default.createElement(_SelectArrow2.default, { isOpened: isOpened, className: classes.selectArrow, 'data-select-arrow': true })
            )
          ),
          this.renderSelectMenuOuter()
        );
      }
    }]);

    return WrapperSelect;
  }(_react2.default.PureComponent);

  WrapperSelect.propTypes = {
    value: _propTypes2.default.any,
    options: _propTypes2.default.array,
    onClose: _propTypes2.default.func,
    onOpen: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onValueClick: _propTypes2.default.func,
    onInputClear: _propTypes2.default.func,
    clearable: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    className: _propTypes2.default.string,
    classes: _propTypes2.default.object,
    generatedClassName: _propTypes2.default.func
  };

  WrapperSelect.defaultProps = {
    onClose: function onClose() {},
    onOpen: function onOpen() {},
    onChange: function onChange() {},
    onValueClick: function onValueClick() {},
    onInputClear: function onInputClear() {},
    clearable: false,
    options: [],
    placeholder: 'Select...',
    classes: {
      selectArrow: '',
      selectArrowZone: '',
      selectClear: '',
      selectClearZone: '',
      selectControl: '',
      selectInput: '',
      selectInputField: '',
      selectMenu: '',
      selectMenuOuter: '',
      selectMultiValueWrapper: '',
      selectOption: '',
      selectPlaceholder: '',
      selectValue: '',
      selectValueLabel: ''
    },
    generatedClassName: function generatedClassName() {}
  };

  exports.default = (0, _reactClickOutside2.default)(WrapperSelect);
});
//# sourceMappingURL=Select.js.map