(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'styled-components', 'react-click-outside', 'uuid', './constants', './partials/Select', './partials/SelectMenu', './partials/SelectValue', './partials/SelectMultiValue', './partials/SelectClear', './partials/SelectArrow', './partials/SelectInput', './partials/SelectInputField', './partials/SelectInputFieldSize', './partials/SelectControl', './partials/SelectNoResults', './partials/SelectClearZone', './partials/SelectArrowZone', './partials/SelectMenuOuter', './partials/SelectPlaceholder', './partials/SelectValueWrapper', './partials/SelectMultiValueWrapper', './renderers/ValueRenderer', './renderers/OptionRenderer', './functions/stringifyValue'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('styled-components'), require('react-click-outside'), require('uuid'), require('./constants'), require('./partials/Select'), require('./partials/SelectMenu'), require('./partials/SelectValue'), require('./partials/SelectMultiValue'), require('./partials/SelectClear'), require('./partials/SelectArrow'), require('./partials/SelectInput'), require('./partials/SelectInputField'), require('./partials/SelectInputFieldSize'), require('./partials/SelectControl'), require('./partials/SelectNoResults'), require('./partials/SelectClearZone'), require('./partials/SelectArrowZone'), require('./partials/SelectMenuOuter'), require('./partials/SelectPlaceholder'), require('./partials/SelectValueWrapper'), require('./partials/SelectMultiValueWrapper'), require('./renderers/ValueRenderer'), require('./renderers/OptionRenderer'), require('./functions/stringifyValue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styledComponents, global.reactClickOutside, global.uuid, global.constants, global.Select, global.SelectMenu, global.SelectValue, global.SelectMultiValue, global.SelectClear, global.SelectArrow, global.SelectInput, global.SelectInputField, global.SelectInputFieldSize, global.SelectControl, global.SelectNoResults, global.SelectClearZone, global.SelectArrowZone, global.SelectMenuOuter, global.SelectPlaceholder, global.SelectValueWrapper, global.SelectMultiValueWrapper, global.ValueRenderer, global.OptionRenderer, global.stringifyValue);
    global.Select = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styledComponents, _reactClickOutside, _uuid, _constants, _Select, _SelectMenu, _SelectValue, _SelectMultiValue, _SelectClear, _SelectArrow, _SelectInput, _SelectInputField, _SelectInputFieldSize, _SelectControl, _SelectNoResults, _SelectClearZone, _SelectArrowZone, _SelectMenuOuter, _SelectPlaceholder, _SelectValueWrapper, _SelectMultiValueWrapper, _ValueRenderer, _OptionRenderer, _stringifyValue) {
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

  var _SelectMultiValue2 = _interopRequireDefault(_SelectMultiValue);

  var _SelectClear2 = _interopRequireDefault(_SelectClear);

  var _SelectArrow2 = _interopRequireDefault(_SelectArrow);

  var _SelectInput2 = _interopRequireDefault(_SelectInput);

  var _SelectInputField2 = _interopRequireDefault(_SelectInputField);

  var _SelectInputFieldSize2 = _interopRequireDefault(_SelectInputFieldSize);

  var _SelectControl2 = _interopRequireDefault(_SelectControl);

  var _SelectNoResults2 = _interopRequireDefault(_SelectNoResults);

  var _SelectClearZone2 = _interopRequireDefault(_SelectClearZone);

  var _SelectArrowZone2 = _interopRequireDefault(_SelectArrowZone);

  var _SelectMenuOuter2 = _interopRequireDefault(_SelectMenuOuter);

  var _SelectPlaceholder2 = _interopRequireDefault(_SelectPlaceholder);

  var _SelectValueWrapper2 = _interopRequireDefault(_SelectValueWrapper);

  var _SelectMultiValueWrapper2 = _interopRequireDefault(_SelectMultiValueWrapper);

  var _ValueRenderer2 = _interopRequireDefault(_ValueRenderer);

  var _OptionRenderer2 = _interopRequireDefault(_OptionRenderer);

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

  var SEARCH_INPUT_MIN_SIZE = 1;

  var WrapperSelect = function (_React$PureComponent) {
    _inherits(WrapperSelect, _React$PureComponent);

    function WrapperSelect(props) {
      _classCallCheck(this, WrapperSelect);

      var _this = _possibleConstructorReturn(this, (WrapperSelect.__proto__ || Object.getPrototypeOf(WrapperSelect)).call(this, props));

      _initialiseProps.call(_this);

      _this.indexValues(props);

      var values = [];
      if (props.value && _this.optionsMap.hasOwnProperty(props.value)) {
        values.push(props.value);
      }

      if (Array.isArray(props.value)) {
        values = values.concat(props.value);
      }

      _this.state = {
        values: new Set(values),
        isOpened: false,
        isFocused: false,
        isSelected: false,
        searchTerm: null,
        searchWidth: 1,
        focusedIndex: 0,
        options: props.options,
        'aria-owns': _this.props['aria-owns'] || _uuid2.default.v4(),
        'input-field-id': _uuid2.default.v4()
      };

      _this.inputInnerRef = null;
      _this.searchSizeRef = null;
      _this.shouldFireClickOutsideHack = null;
      return _this;
    }

    _createClass(WrapperSelect, [{
      key: 'indexValues',
      value: function indexValues(props) {
        this.optionsMap = props.options.reduce(function (agregate, current) {
          agregate[current.value] = current;
          return agregate;
        }, {});
      }
    }, {
      key: 'openOptions',
      value: function openOptions() {
        this.setState({
          options: this.getOptions(),
          focusedIndex: 0,
          isOpened: true
        });
        this.props.onOpen();
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
        if (this.state.isOpened && this.shouldFireClickOutsideHack) {
          this.closeOptions();
          this.shouldFireClickOutsideHack = false;
        }
      }
    }, {
      key: 'resetField',
      value: function resetField() {
        var _this3 = this;

        var multi = this.props.multi;


        var values = [];
        if (multi) {
          values = Array.from(this.state.values);
          values.pop();
          this.props.onChange(values);
        }

        this.setState({
          values: new Set(values),
          searchTerm: null,
          focusedIndex: 0,
          options: this.props.options
        }, function () {
          _this3.closeOptions();
          _this3.inputInnerRef.value = '';
          _this3.props.onInputClear();
        });
      }
    }, {
      key: 'getOptions',
      value: function getOptions() {
        var multi = this.props.multi;
        var values = this.state.values;

        return this.props.options.filter(function (opt) {
          var label = opt.label.toLowerCase().trim();
          if (values.has(label) && multi) {
            return false;
          }
          return true;
        });
      }
    }, {
      key: 'renderSelectMultiValueWrapper',
      value: function renderSelectMultiValueWrapper() {
        var _this4 = this;

        var _props = this.props,
            multi = _props.multi,
            placeholder = _props.placeholder,
            searchable = _props.searchable,
            classes = _props.classes,
            valueRenderer = _props.valueRenderer;
        var _state = this.state,
            values = _state.values,
            isOpened = _state.isOpened,
            isSelected = _state.isSelected,
            searchTerm = _state.searchTerm,
            searchWidth = _state.searchWidth;


        var SelectValueComp = multi ? _SelectMultiValue2.default : _SelectValue2.default;
        var SelectWrapperComp = multi ? _SelectMultiValueWrapper2.default : _SelectValueWrapper2.default;

        var content = '';

        if (values.size) {
          content = Array.from(values).map(function (value, key) {
            return _react2.default.createElement(
              SelectValueComp,
              { value: value, onRemoveTag: _this4.onRemoveTag, key: key, className: classes.selectValue, 'data-select-value': true, 'data-multi-value': multi },
              valueRenderer({ multi: multi, value: value, label: _this4.optionsMap[value].label }, classes.selectValueLabel)
            );
          });
        }

        if (!values.size && !searchTerm) {
          content = _react2.default.createElement(
            _SelectPlaceholder2.default,
            {
              className: classes.selectPlaceholder,
              'data-select-placeholder': true },
            placeholder
          );
        }

        if (!searchable) {
          return _react2.default.createElement(
            SelectWrapperComp,
            {
              'for': this.state['input-field-id'],
              className: classes.selectMultiValueWrapper,
              'data-select-multi-value-wrapper': multi },
            content
          );
        }

        return _react2.default.createElement(
          SelectWrapperComp,
          {
            'for': this.state['input-field-id'],
            className: classes.selectMultiValueWrapper,
            'data-select-multi-value-wrapper': multi },
          content,
          _react2.default.createElement(
            _SelectInput2.default,
            { 'data-select-input': true, className: classes.selectInput },
            _react2.default.createElement(_SelectInputField2.default, {
              style: { width: searchWidth + 'px' },
              id: this.state['input-field-id'],
              className: classes.selectInputField,
              'data-select-input-search': true,
              onKeyDown: this.onSearching,
              onChange: this.props.onInputChange,
              innerRef: function innerRef(n) {
                return _this4.inputInnerRef = n;
              },
              'aria-label': placeholder,
              'aria-expanded': isOpened,
              'aria-owns': this.state['aria-owns'],
              role: 'combobox', type: 'text' })
          ),
          _react2.default.createElement(
            _SelectInputFieldSize2.default,
            {
              'data-select-input-size': true,
              innerRef: function innerRef(n) {
                return _this4.searchSizeRef = n;
              } },
            searchTerm
          )
        );
      }
    }, {
      key: 'renderSelectMenuOuter',
      value: function renderSelectMenuOuter() {
        var _this5 = this;

        var _props2 = this.props,
            classes = _props2.classes,
            noResultsText = _props2.noResultsText,
            optionRenderer = _props2.optionRenderer;
        var _state2 = this.state,
            values = _state2.values,
            isOpened = _state2.isOpened,
            focusedIndex = _state2.focusedIndex,
            options = _state2.options;


        if (!isOpened) {
          return _react2.default.createElement(
            'div',
            { 'aria-hidden': 'true', id: ['aria-owns'], role: 'listbox' },
            _react2.default.createElement('div', { role: 'option', tabIndex: '-1' })
          );
        }

        var selectOptions = _react2.default.createElement(
          _SelectNoResults2.default,
          null,
          noResultsText
        );

        if (options.length > 0) {
          selectOptions = options.map(function (opt, i) {
            var isSelected = values.has(opt.value);
            var isFocused = focusedIndex === i;
            return optionRenderer(Object.assign({
              key: i,
              'data-key': i,
              isSelected: isSelected,
              id: _this5.state['aria-owns'],
              className: classes.selectOption,
              isFocused: focusedIndex == i,
              tabIndex: values.has(opt.value) ? '0' : '-1',
              onMouseOver: function onMouseOver(e) {
                var dataKey = e.target.getAttribute('data-key');
                _this5.setState({ focusedIndex: dataKey });
              },
              onMouseOut: function onMouseOut(e) {
                _this5.setState({ focusedIndex: null });
              },
              onMouseDown: function onMouseDown(e) {
                return _this5.onSelectValue(opt.value, e);
              }
            }, opt), i);
          });
        }
        return _react2.default.createElement(
          _SelectMenuOuter2.default,
          {
            className: classes.selectMenuOuter,
            'data-select-menu-outer': true },
          _react2.default.createElement(
            _SelectMenu2.default,
            {
              role: 'listbox',
              className: classes.selectMenu, 'data-select-menu': true },
            selectOptions
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
            '\xD7'
          )
        );
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.props.generatedClassName(this.selectNode.state.generatedClassName);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.props.generatedClassName(this.selectNode.state.generatedClassName);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this6 = this;

        this.setState({
          options: nextProps.options
        }, function () {
          return _this6.indexValues(nextProps);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this7 = this;

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
              return _this7.selectNode = node;
            }, innerRef: function innerRef(node) {
              return _this7.selectInnerRef = node;
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

  var _initialiseProps = function _initialiseProps() {
    var _this8 = this;

    this.onRemoveTag = function (props, e) {
      e.stopPropagation();
      var multi = _this8.props.multi;


      _this8.state.values.delete(props.value);

      _this8.setState({
        values: new Set(Array.from(_this8.state.values))
      }, function () {
        _this8.props.onChange(Array.from(_this8.state.values));
      });
    };

    this.onClearValue = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this8.resetField();
    };

    this.onSelectValue = function (newValue, event) {
      var multi = _this8.props.multi;
      var values = _this8.state.values;


      !multi && values.clear(); // when is not multi select

      if (!values.has(newValue)) {
        values.add(newValue);
        _this8.setState({
          values: values,
          searchTerm: null,
          focusedIndex: 0
        }, function () {
          _this8.inputInnerRef.value = '';
          _this8.props.onChange(multi ? Array.from(values) : newValue);
        });
      }
      _this8.closeOptions();
      _this8.props.onValueClick(multi ? Array.from(values) : newValue, event);
    };

    this.onSelectFocused = function (event) {
      _this8.shouldFireClickOutsideHack = false;

      clearInterval(_this8.focusedTimeout);
      _this8.focusedTimeout = window.setTimeout(function () {
        _this8.shouldFireClickOutsideHack = true;
      }, 200);

      _this8.setState({
        isFocused: true
      });

      _this8.openOptions();
      _this8.setFocus();
    };

    this.onSearching = function (event) {
      var _props5 = _this8.props,
          onInputChange = _props5.onInputChange,
          onTyping = _props5.onTyping;
      var _state4 = _this8.state,
          focusedIndex = _state4.focusedIndex,
          options = _state4.options,
          isOpened = _state4.isOpened;


      var typing = function typing() {
        var term = _this8.inputInnerRef.value.toLowerCase().trim();

        onTyping(term);

        var filteredOptions = _this8.getOptions().filter(function (opt) {
          var label = opt.label.toLowerCase().trim();
          return label.indexOf(term) !== -1;
        });

        _this8.setState({
          searchTerm: _this8.inputInnerRef.value,
          searchWidth: searchWidth,
          options: filteredOptions,
          isOpened: true,
          focusedIndex: 0
        });

        var searchWidth = SEARCH_INPUT_MIN_SIZE;
        if (_this8.searchSizeRef) {
          var width = _this8.searchSizeRef.getBoundingClientRect().width;
          searchWidth = width > SEARCH_INPUT_MIN_SIZE ? width : SEARCH_INPUT_MIN_SIZE;
        }

        setTimeout(function () {
          _this8.setState({ searchWidth: searchWidth });
        });
      };

      var lastIndex = options.length - 1;
      switch (event.keyCode) {
        case _constants.KEY_BACKSPACE:
          // backspace
          if (!_this8.inputInnerRef.value) {
            _this8.resetField();
            break;
          }
          setTimeout(typing, 1);
          break;
        case _constants.KEY_UP:
          _this8.setState({
            focusedIndex: focusedIndex <= 0 ? lastIndex : focusedIndex - 1
          });
          break;
        case _constants.KEY_DOWN:
          if (!isOpened) {
            _this8.openOptions();
            break;
          }
          _this8.setState({
            focusedIndex: focusedIndex >= lastIndex ? 0 : focusedIndex + 1
          });
          break;
        case _constants.KEY_ENTER:
          if (!options.length) break;
          var newValue = options[focusedIndex].value;
          _this8.onSelectValue(newValue, event);
          break;
        case _constants.KEY_ESC:
          _this8.closeOptions();
          break;
        default:
          setTimeout(typing, 1);
      }
    };
  };

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
    noResultsText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    generatedClassName: _propTypes2.default.func
  };

  WrapperSelect.defaultProps = {
    onClose: function onClose() {},
    onOpen: function onOpen() {},
    onChange: function onChange() {},
    onInputChange: function onInputChange() {},
    onTyping: function onTyping() {},
    onValueClick: function onValueClick() {},
    onInputClear: function onInputClear() {},
    clearable: false,
    searchable: true,
    multi: false,
    options: [],
    placeholder: 'Select...',
    noResultsText: 'No results found',
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
    valueRenderer: _ValueRenderer2.default,
    optionRenderer: _OptionRenderer2.default,
    generatedClassName: function generatedClassName() {}
  };

  exports.default = (0, _reactClickOutside2.default)(WrapperSelect);
});
//# sourceMappingURL=Select.js.map