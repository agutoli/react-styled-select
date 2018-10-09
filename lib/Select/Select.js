(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'styled-components', 'react-click-outside', 'uuid', './Async', '../helpers/shadowDOM', './constants', './partials/Select', './partials/SelectMenu', './partials/SelectValue', './partials/SelectMultiValue', './partials/SelectClear', './partials/SelectArrow', './partials/SelectInput', './partials/SelectInputField', './partials/SelectInputFieldSize', './partials/SelectControl', './partials/SelectNoResults', './partials/SelectClearZone', './partials/SelectArrowZone', './partials/SelectMenuOuter', './partials/SelectPlaceholder', './partials/SelectValueWrapper', './partials/SelectMultiValueWrapper', './renderers/ValueRenderer', './renderers/OptionRenderer', './functions/stringifyValue'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('styled-components'), require('react-click-outside'), require('uuid'), require('./Async'), require('../helpers/shadowDOM'), require('./constants'), require('./partials/Select'), require('./partials/SelectMenu'), require('./partials/SelectValue'), require('./partials/SelectMultiValue'), require('./partials/SelectClear'), require('./partials/SelectArrow'), require('./partials/SelectInput'), require('./partials/SelectInputField'), require('./partials/SelectInputFieldSize'), require('./partials/SelectControl'), require('./partials/SelectNoResults'), require('./partials/SelectClearZone'), require('./partials/SelectArrowZone'), require('./partials/SelectMenuOuter'), require('./partials/SelectPlaceholder'), require('./partials/SelectValueWrapper'), require('./partials/SelectMultiValueWrapper'), require('./renderers/ValueRenderer'), require('./renderers/OptionRenderer'), require('./functions/stringifyValue'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.styledComponents, global.reactClickOutside, global.uuid, global.Async, global.shadowDOM, global.constants, global.Select, global.SelectMenu, global.SelectValue, global.SelectMultiValue, global.SelectClear, global.SelectArrow, global.SelectInput, global.SelectInputField, global.SelectInputFieldSize, global.SelectControl, global.SelectNoResults, global.SelectClearZone, global.SelectArrowZone, global.SelectMenuOuter, global.SelectPlaceholder, global.SelectValueWrapper, global.SelectMultiValueWrapper, global.ValueRenderer, global.OptionRenderer, global.stringifyValue);
    global.Select = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _styledComponents, _reactClickOutside, _uuid, _Async, _shadowDOM, _constants, _Select, _SelectMenu, _SelectValue, _SelectMultiValue, _SelectClear, _SelectArrow, _SelectInput, _SelectInputField, _SelectInputFieldSize, _SelectControl, _SelectNoResults, _SelectClearZone, _SelectArrowZone, _SelectMenuOuter, _SelectPlaceholder, _SelectValueWrapper, _SelectMultiValueWrapper, _ValueRenderer, _OptionRenderer, _stringifyValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ShadowDOM = exports.Async = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

  var _uuid2 = _interopRequireDefault(_uuid);

  var _Async2 = _interopRequireDefault(_Async);

  var _shadowDOM2 = _interopRequireDefault(_shadowDOM);

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

  function optionsMapReducer(agregate, current) {
    agregate[current.value] = current;
    return agregate;
  }

  var WrapperSelect = function (_React$PureComponent) {
    _inherits(WrapperSelect, _React$PureComponent);

    function WrapperSelect(props) {
      _classCallCheck(this, WrapperSelect);

      var _this2 = _possibleConstructorReturn(this, (WrapperSelect.__proto__ || Object.getPrototypeOf(WrapperSelect)).call(this, props));

      _this2.state = {
        values: _this2.updateValues(props),
        isOpened: false,
        isFocused: false,
        isSelected: false,
        searchTerm: null,
        searchWidth: 1,
        focusedIndex: 0,
        options: props.options,
        'aria-owns': _this2.props['aria-owns'] || _uuid2.default.v4(),
        'input-field-id': _uuid2.default.v4()
      };

      _this2.inputInnerRef = null;
      _this2.searchSizeRef = null;
      _this2.shouldFireClickOutsideHack = null;

      _this2.onSearchingBinded = _this2.onSearching.bind(_this2);
      _this2.onRemoveTagBinded = _this2.onRemoveTag.bind(_this2);
      _this2.onClearValueBinded = _this2.onClearValue.bind(_this2);
      _this2.onSelectValueBinded = _this2.onSelectValue.bind(_this2);
      _this2.onSelectFocusedBinded = _this2.onSelectFocused.bind(_this2);
      return _this2;
    }

    _createClass(WrapperSelect, [{
      key: 'updateValues',
      value: function updateValues(props) {
        this.indexValues(props);

        var values = [];
        if (props.value && this.optionsMap.hasOwnProperty(props.value)) {
          values.push(props.value);
        }

        if (Array.isArray(props.value)) {
          values = values.concat(props.value);
        }
        return new Set(values);
      }
    }, {
      key: 'indexValues',
      value: function indexValues(props) {
        this.optionsMap = props.options.reduce(optionsMapReducer, {});
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
        var _this = this;
        setTimeout(function () {
          _this.inputInnerRef && _this.inputInnerRef.focus();
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
      key: 'onRemoveTag',
      value: function onRemoveTag(props, event) {
        var _this3 = this;

        event.stopPropagation();
        var multi = this.props.multi;


        this.state.values.delete(props.value);

        this.setState({
          values: new Set(Array.from(this.state.values))
        }, function () {
          _this3.props.onChange(Array.from(_this3.state.values));
        });
      }
    }, {
      key: 'resetField',
      value: function resetField() {
        var _this4 = this;

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
          _this4.closeOptions();
          _this4.inputInnerRef.value = '';
          _this4.props.onInputClear();
        });
      }
    }, {
      key: 'onClearValue',
      value: function onClearValue(event) {
        event.preventDefault();
        event.stopPropagation();
        this.resetField();
      }
    }, {
      key: 'onSelectValue',
      value: function onSelectValue(newValue, event) {
        var _this5 = this;

        var multi = this.props.multi;
        var values = this.state.values;


        !multi && values.clear(); // when is not multi select

        if (!values.has(newValue)) {
          values.add(newValue);
          this.setState({
            values: values,
            searchTerm: null,
            focusedIndex: 0
          }, function () {
            _this5.inputInnerRef.value = '';
            _this5.props.onChange(multi ? Array.from(values) : newValue);
          });
        }
        this.closeOptions();
        this.props.onValueClick(multi ? Array.from(values) : newValue, event);
        this.props.closeMenuOnSelect(multi ? Array.from(values) : newValue, event);
      }
    }, {
      key: 'onSelectFocused',
      value: function onSelectFocused(event) {
        var _this6 = this;

        this.shouldFireClickOutsideHack = false;

        clearInterval(this.focusedTimeout);
        this.focusedTimeout = setTimeout(function () {
          _this6.shouldFireClickOutsideHack = true;
        }, 200);

        this.setState({
          isFocused: true
        });

        this.openOptions();
        this.setFocus();
      }
    }, {
      key: 'getOptions',
      value: function getOptions() {
        var multi = this.props.multi;
        var values = this.state.values;

        return this.props.options.filter(function (opt) {
          var label = typeof opt.label === 'string' && opt.label.toLowerCase().trim();
          if (label && values.has(label) && multi) {
            return false;
          }
          return true;
        });
      }
    }, {
      key: 'onSearching',
      value: function onSearching(event) {
        var _this7 = this;

        var _props = this.props,
            onInputChange = _props.onInputChange,
            onTyping = _props.onTyping;
        var _state = this.state,
            focusedIndex = _state.focusedIndex,
            options = _state.options,
            isOpened = _state.isOpened;


        this.props.onKeyDown(event);

        var typing = function typing() {
          var term = _this7.inputInnerRef.value.toLowerCase().trim();

          onTyping(term);

          var filteredOptions = _this7.getOptions().filter(function (opt) {
            if (typeof opt.label !== 'string') {
              return true;
            }

            var label = opt.label.toLowerCase().trim();
            return label.indexOf(term) !== -1;
          });

          _this7.setState({
            searchTerm: _this7.inputInnerRef.value,
            searchWidth: searchWidth,
            options: filteredOptions,
            isOpened: true,
            focusedIndex: 0
          });

          var searchWidth = SEARCH_INPUT_MIN_SIZE;
          if (_this7.searchSizeRef) {
            var width = _this7.searchSizeRef.getBoundingClientRect().width;
            searchWidth = width > SEARCH_INPUT_MIN_SIZE ? width : SEARCH_INPUT_MIN_SIZE;
          }

          setTimeout(function () {
            _this7.setState({ searchWidth: searchWidth });
          });
        };

        var lastIndex = options.length - 1;
        switch (event.keyCode) {
          case _constants.KEY_BACKSPACE:
            // backspace
            if (!this.inputInnerRef.value) {
              this.resetField();
              break;
            }
            setTimeout(typing, 1);
            break;
          case _constants.KEY_UP:
            this.setState({
              focusedIndex: focusedIndex <= 0 ? lastIndex : focusedIndex - 1
            });
            break;
          case _constants.KEY_DOWN:
            if (!isOpened) {
              this.openOptions();
              break;
            }
            this.setState({
              focusedIndex: focusedIndex >= lastIndex ? 0 : focusedIndex + 1
            });
            break;
          case _constants.KEY_ENTER:
            if (!options.length) break;
            var newValue = options[focusedIndex].value;
            this.onSelectValueBinded(newValue, event);
            break;
          case _constants.KEY_ESC:
            this.closeOptions();
            break;
          default:
            setTimeout(typing, 1);
        }
      }
    }, {
      key: 'renderSelectMultiValueWrapper',
      value: function renderSelectMultiValueWrapper() {
        var _this8 = this;

        var _props2 = this.props,
            multi = _props2.multi,
            placeholder = _props2.placeholder,
            searchable = _props2.searchable,
            classes = _props2.classes,
            valueRenderer = _props2.valueRenderer,
            disabled = _props2.disabled;
        var _state2 = this.state,
            values = _state2.values,
            isOpened = _state2.isOpened,
            isSelected = _state2.isSelected,
            searchTerm = _state2.searchTerm,
            searchWidth = _state2.searchWidth;


        var SelectValueComp = multi ? _SelectMultiValue2.default : _SelectValue2.default;
        var SelectWrapperComp = multi ? _SelectMultiValueWrapper2.default : _SelectValueWrapper2.default;

        var content = '';
        var _values = values;
        if (_values.size) {

          if (!multi && _values.size > 1) {
            _values = new Set([]);
          }

          content = Array.from(_values).map(function (value, key) {
            return _react2.default.createElement(
              SelectValueComp,
              { value: value, onRemoveTag: _this8.onRemoveTagBinded, key: key, className: classes.selectValue, 'data-select-value': true, 'data-multi-value': multi },
              valueRenderer({ multi: multi, value: value, label: _this8.optionsMap[value].label }, classes.selectValueLabel)
            );
          });

          if (!multi && content.length > 1) {
            setTimeout(function () {
              _this8.resetField();
            }, 10);
          }
        }

        if (!_values.size && !searchTerm) {
          content = _react2.default.createElement(
            _SelectPlaceholder2.default,
            {
              className: classes.selectPlaceholder,
              'data-select-placeholder': true },
            placeholder
          );
        }

        if (!searchable || multi) {
          return _react2.default.createElement(
            SelectWrapperComp,
            {
              htmlFor: this.state['input-field-id'],
              innerRef: function innerRef(n) {
                return _this8.inputInnerRef = n;
              },
              className: classes.selectMultiValueWrapper,
              'data-select-multi-value-wrapper': multi },
            content
          );
        }

        return _react2.default.createElement(
          SelectWrapperComp,
          {
            htmlFor: this.state['input-field-id'],
            className: classes.selectMultiValueWrapper,
            'data-select-multi-value-wrapper': multi },
          content,
          _react2.default.createElement(
            _SelectInput2.default,
            { 'data-select-input': true, className: classes.selectInput },
            _react2.default.createElement(_SelectInputField2.default, {
              style: { width: searchWidth + 'px' },
              disabled: disabled,
              id: this.state['input-field-id'],
              className: classes.selectInputField,
              'data-select-input-search': true,
              onKeyUp: this.props.onKeyUp,
              onKeyPress: this.props.onKeyPress,
              onKeyDown: this.onSearchingBinded,
              onChange: this.props.onInputChange,
              innerRef: function innerRef(n) {
                return _this8.inputInnerRef = n;
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
                return _this8.searchSizeRef = n;
              } },
            searchTerm
          )
        );
      }
    }, {
      key: 'renderSelectMenuOuter',
      value: function renderSelectMenuOuter() {
        var _this9 = this;

        var _props3 = this.props,
            classes = _props3.classes,
            noResultsText = _props3.noResultsText,
            optionRenderer = _props3.optionRenderer,
            disabled = _props3.disabled;
        var _state3 = this.state,
            values = _state3.values,
            isOpened = _state3.isOpened,
            focusedIndex = _state3.focusedIndex,
            options = _state3.options;


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
              id: _this9.state['aria-owns'],
              className: classes.selectOption,
              isFocused: focusedIndex == i,
              tabIndex: values.has(opt.value) ? '0' : '-1',
              onMouseOver: function onMouseOver(e) {
                var dataKey = e.target.getAttribute('data-key');
                _this9.setState({ focusedIndex: dataKey });
              },
              onMouseOut: function onMouseOut(e) {
                _this9.setState({ focusedIndex: null });
              },
              onMouseDown: function onMouseDown(e) {
                return _this9.onSelectValueBinded(opt.value, e);
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
        var _props4 = this.props,
            clearable = _props4.clearable,
            classes = _props4.classes;


        if (!clearable) return;

        return _react2.default.createElement(
          _SelectClearZone2.default,
          {
            className: classes.selectClearZone,
            'data-select-clear-zone': true, onMouseDown: this.onClearValueBinded },
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
        this.setState({
          options: nextProps.options,
          values: this.updateValues(nextProps)
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this10 = this;

        var _props5 = this.props,
            name = _props5.name,
            disabled = _props5.disabled,
            className = _props5.className,
            classes = _props5.classes,
            style = _props5.style,
            required = _props5.required;
        var _state4 = this.state,
            value = _state4.value,
            isSelected = _state4.isSelected,
            isOpened = _state4.isOpened;

        var values = Array.from(this.state.values);
        return _react2.default.createElement(
          _Select2.default,
          { style: style, 'data-select': true, className: className, disabled: disabled,
            ref: function ref(node) {
              return _this10.selectNode = node;
            }, innerRef: function innerRef(node) {
              return _this10.selectInnerRef = node;
            } },
          _react2.default.createElement('input', {
            type: required ? "text" : "hidden",
            name: name,
            style: { position: "absolute", zIndex: "0", outline: "none", opacity: "0" },
            value: (0, _stringifyValue2.default)(values.length ? values : ""),
            disabled: disabled, required: required }),
          _react2.default.createElement(
            _SelectControl2.default,
            {
              disabled: disabled,
              isOpened: isOpened,
              'aria-haspopup': isOpened,
              className: classes.selectControl,
              'data-select-control': true, onMouseDown: this.onSelectFocusedBinded },
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
    onKeyUp: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onValueClick: _propTypes2.default.func,
    closeMenuOnSelect: _propTypes2.default.func,
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
    onKeyUp: function onKeyUp() {},
    onKeyPress: function onKeyPress() {},
    onKeyDown: function onKeyDown() {},
    onInputChange: function onInputChange() {},
    onTyping: function onTyping() {},
    onValueClick: function onValueClick() {},
    onInputClear: function onInputClear() {},
    closeMenuOnSelect: function closeMenuOnSelect() {},
    clearable: false,
    searchable: true,
    disabled: false,
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

  var EnhanceWrapperSelect = (0, _reactClickOutside2.default)(WrapperSelect);
  var ShadowWrapperSelect = (0, _shadowDOM2.default)(EnhanceWrapperSelect);

  var NormalAsync = function NormalAsync(props) {
    return _react2.default.createElement(
      _Async2.default,
      props,
      _react2.default.createElement(EnhanceWrapperSelect, null)
    );
  };
  var ShadowAsync = function ShadowAsync(props) {
    return _react2.default.createElement(
      _Async2.default,
      props,
      _react2.default.createElement(ShadowWrapperSelect, null)
    );
  };

  ShadowWrapperSelect.Async = ShadowAsync;

  var Async = exports.Async = EnhanceWrapperSelect.Async = NormalAsync;
  var ShadowDOM = exports.ShadowDOM = EnhanceWrapperSelect.ShadowDOM = ShadowWrapperSelect;

  exports.default = EnhanceWrapperSelect;
});
//# sourceMappingURL=Select.js.map