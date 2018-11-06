import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import enhanceWithClickOutside from 'react-click-outside'
import uuid from 'uuid';
import SelectAsync from './Async'
import shadowDOM from '../helpers/shadowDOM'

import {
  KEY_UP,
  KEY_ESC,
  KEY_DOWN,
  KEY_ENTER,
  KEY_BACKSPACE
} from './constants'

const SEARCH_INPUT_MIN_SIZE = 1;

import Select from './partials/Select'
import SelectMenu from './partials/SelectMenu'
import SelectValue from './partials/SelectValue'
import SelectMultiValue from './partials/SelectMultiValue'
import SelectClear from './partials/SelectClear'
import SelectArrow from './partials/SelectArrow'
import SelectInput from './partials/SelectInput'
import SelectInputField from './partials/SelectInputField'
import SelectInputFieldSize from './partials/SelectInputFieldSize'
import SelectControl from './partials/SelectControl'
import SelectNoResults from './partials/SelectNoResults'
import SelectClearZone from './partials/SelectClearZone'
import SelectArrowZone from './partials/SelectArrowZone'
import SelectMenuOuter from './partials/SelectMenuOuter'
import SelectPlaceholder from './partials/SelectPlaceholder'
import SelectValueWrapper from './partials/SelectValueWrapper'
import SelectMultiValueWrapper from './partials/SelectMultiValueWrapper'

import ValueRenderer from './renderers/ValueRenderer'
import OptionRenderer from './renderers/OptionRenderer'

import stringifyValue from './functions/stringifyValue'

function optionsMapReducer(agregate, current) {
  agregate[current.value] = current
  return agregate
}

class WrapperSelect extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      values: this.updateValues(props),
      isOpened: false,
      isFocused: false,
      isSelected: false,
      searchTerm: null,
      searchWidth: 1,
      focusedIndex: 0,
      options: props.options,
      'aria-owns': this.props['aria-owns'] || uuid.v4(),
      'input-field-id': uuid.v4()
    }

    this.inputInnerRef = null
    this.searchSizeRef = null
    this.shouldFireClickOutsideHack = null

    this.onSearchingBinded = this.onSearching.bind(this)
    this.onRemoveTagBinded = this.onRemoveTag.bind(this)
    this.onClearValueBinded = this.onClearValue.bind(this)
    this.onSelectValueBinded = this.onSelectValue.bind(this)
    this.onSelectFocusedBinded = this.onSelectFocused.bind(this)
  }

  updateValues(props) {
    this.indexValues(props)

    let values = [];
    if (props.value && this.optionsMap.hasOwnProperty(props.value)) {
      values.push(props.value)
    }

    if (Array.isArray(props.value)) {
      values = values.concat(props.value)
    }
    return new Set(values)
  }

  indexValues(props) {
    this.optionsMap = props.options.reduce(optionsMapReducer, {})
  }

  openOptions() {
    this.setState({
      options: this.getOptions(),
      focusedIndex: 0,
      isOpened: true
    })
    this.props.onOpen()
  }

  closeOptions() {
    this.setState({ isOpened: false })
    this.props.onClose()
  }

  setFocus() {
    let _this = this
    setTimeout(function() {
      _this.inputInnerRef && _this.inputInnerRef.focus()
    }, 10)
  }

  // react-click-outside callback

  handleClickOutside(event) {
    if (this.state.isOpened && this.shouldFireClickOutsideHack) {
      this.closeOptions()
      this.shouldFireClickOutsideHack = false
    }
  }

  onRemoveTag(props, event) {
    event.stopPropagation()
    const { multi } = this.props;

    this.state.values.delete(props.value)

    this.setState({
      values: new Set(Array.from(this.state.values))
    }, () => {
      this.props.onChange(Array.from(this.state.values))
    })
  }

  resetField() {
    const { multi } = this.props;

    let values = [];
    if (multi) {
      values = Array.from(this.state.values)
      values.pop()
      this.props.onChange(values)
    }

    this.setState({
      values: new Set(values),
      searchTerm: null,
      focusedIndex: 0,
      options: this.props.options,
    }, () => {
      this.closeOptions()
      this.inputInnerRef.value = ''
      this.props.onInputClear()
    })
  }

  onClearValue(event) {
    event.preventDefault()
    event.stopPropagation()
    this.resetField()
  }

  onSelectValue(newValue, event) {
    const { multi } = this.props;
    const { values } = this.state;

    !multi && values.clear() // when is not multi select

    if (!values.has(newValue)) {
      values.add(newValue)
      this.setState({
        values,
        searchTerm: null,
        focusedIndex: 0
      }, () => {
        this.inputInnerRef.value = ''
        this.props.onChange(multi ? Array.from(values) : newValue)
      })
    }
    this.closeOptions()
    this.props.onValueClick(multi ? Array.from(values) : newValue, event)
    this.props.closeMenuOnSelect(multi ? Array.from(values) : newValue, event)
  }

  onSelectFocused(event) {
    this.shouldFireClickOutsideHack = false

    clearInterval(this.focusedTimeout)
    this.focusedTimeout = setTimeout(() => {
      this.shouldFireClickOutsideHack = true
    }, 200)

    this.setState({
      isFocused: true
    })

    this.openOptions()
    this.setFocus()
  }

  getOptions() {
    const { multi } = this.props;
    const { values } = this.state;
    return this.props.options.filter((opt) => {
      const label = typeof opt.label === 'string' && opt.label.toLowerCase().trim()
      if (label && values.has(label) && multi) {
        return false;
      }
      return true;
    })
  }

  onSearching(event) {
    const { onInputChange, onTyping, searchable } = this.props
    const { focusedIndex, options, isOpened } = this.state;

    this.props.onKeyDown(event)

    const typing = () => {
      const term = this.inputInnerRef.value.toLowerCase().trim()

      onTyping(term)

      const filteredOptions = this.getOptions().filter((opt) => {
        if (typeof opt.label !== 'string') {
          return true;
        }

        const label = opt.label.toLowerCase().trim()
        return label.indexOf(term) !== -1
      })

      this.setState({
        searchTerm: this.inputInnerRef.value,
        searchWidth,
        options: filteredOptions,
        isOpened: true,
        focusedIndex: 0
      })

      let searchWidth = SEARCH_INPUT_MIN_SIZE;
      if (this.searchSizeRef) {
        const width = this.searchSizeRef.getBoundingClientRect().width;
        searchWidth = width > SEARCH_INPUT_MIN_SIZE ? width : SEARCH_INPUT_MIN_SIZE;
      }

      setTimeout(() => {
        this.setState({ searchWidth })
      })
    }

    const lastIndex = (options.length - 1)
    switch (event.keyCode) {
      case KEY_BACKSPACE: // backspace
        if (!this.inputInnerRef.value) {
          this.resetField()
          break;
        }
        setTimeout(typing, 1)
        break;
      case KEY_UP:
        event.preventDefault();
        this.setState({
          focusedIndex: (focusedIndex <= 0 ? lastIndex : (focusedIndex - 1))
        })
        break;
      case KEY_DOWN:
        event.preventDefault();
        if (!isOpened) {
          this.openOptions()
          break;
        }
        this.setState({
          focusedIndex: (focusedIndex >= lastIndex ? 0 : (focusedIndex + 1))
        })
        break;
      case KEY_ENTER:
        event.preventDefault();
        if (!options.length) break;
        const newValue = options[focusedIndex].value
        this.onSelectValueBinded(newValue, event)
        break;
      case KEY_ESC:
        this.closeOptions()
        break;
      default:
        if (searchable) {
          setTimeout(typing, 1)
        }
    }
  }

  renderSelectMultiValueWrapper() {
    const { multi, placeholder, searchable, classes, valueRenderer, disabled } = this.props;
    const { values, isOpened, isSelected, searchTerm, searchWidth } = this.state;

    const SelectValueComp = multi ? SelectMultiValue : SelectValue;
    const SelectWrapperComp = multi ? SelectMultiValueWrapper : SelectValueWrapper;

    let content = '';
    let _values = values
    if (_values.size) {

      if (!multi && _values.size > 1) {
        _values = new Set([])
      }

      content = Array.from(_values).map((value, key) => (
        <SelectValueComp value={value} onRemoveTag={this.onRemoveTagBinded} key={key} className={classes.selectValue} data-select-value data-multi-value={multi}>
          {valueRenderer({ multi, value, label: this.optionsMap[value].label }, classes.selectValueLabel)}
        </SelectValueComp>
      ))

      if (!multi && content.length > 1) {
        setTimeout(() => {
          this.resetField()
        }, 10)
      }
    }

    if (!_values.size && !searchTerm) {
      content = (
        <SelectPlaceholder
          className={classes.selectPlaceholder}
          data-select-placeholder>{placeholder}</SelectPlaceholder>
      )
    }

    if (!searchable || multi) {
      return (
        <SelectWrapperComp
          htmlFor={this.state['input-field-id']}
          innerRef={(n) => this.inputInnerRef = n}
          className={classes.selectMultiValueWrapper}
          onFocus={this.onSelectFocusedBinded}
          onKeyDown={this.onSearchingBinded}
          onKeyUp={this.props.onKeyUp}
          onKeyPress={this.props.onKeyPress}
          tabIndex={this.props.tabIndex}
          data-select-multi-value-wrapper={multi}>
          {content}
        </SelectWrapperComp>
      )
    }

    return (
      <SelectWrapperComp
        htmlFor={this.state['input-field-id']}
        className={classes.selectMultiValueWrapper}
        data-select-multi-value-wrapper={multi}>
        {content}
        <SelectInput data-select-input className={classes.selectInput}>
          <SelectInputField
            style={{width: `${searchWidth}px`}}
            disabled={disabled}
            id={this.state['input-field-id']}
            className={classes.selectInputField}
            data-select-input-search
            onFocus={this.onSelectFocusedBinded}
            onKeyUp={this.props.onKeyUp}
            onKeyPress={this.props.onKeyPress}
            onKeyDown={this.onSearchingBinded}
            tabIndex={this.props.tabIndex}
            onChange={this.props.onInputChange}
            innerRef={(n) => this.inputInnerRef = n}
            aria-label={placeholder}
            aria-expanded={isOpened}
            aria-owns={this.state['aria-owns']}
            role="combobox" type="text" />
        </SelectInput>
        <SelectInputFieldSize
          data-select-input-size
          innerRef={(n) => this.searchSizeRef = n}>{searchTerm}</SelectInputFieldSize>
      </SelectWrapperComp>
    )
  }

  renderSelectMenuOuter() {
    const { classes, noResultsText, optionRenderer, disabled } = this.props;
    const { values, isOpened, focusedIndex, options } = this.state;

    if (!isOpened) {
      return (
        <div aria-hidden="true" id={['aria-owns']} role="listbox">
          <div role="option" tabIndex="-1" />
        </div>
      )
    }

    let selectOptions = <SelectNoResults>{noResultsText}</SelectNoResults>;

    if (options.length > 0) {
      selectOptions = options.map((opt, i) => {
        const isSelected = values.has(opt.value)
        const isFocused = focusedIndex === i;
        return optionRenderer(Object.assign({
          key: i,
          'data-key': i,
          isSelected,
          id: this.state['aria-owns'],
          className: classes.selectOption,
          isFocused: focusedIndex == i,
          tabIndex: values.has(opt.value) ? '0' : '-1',
          onMouseOver: (e) => {
            const dataKey = e.target.getAttribute('data-key')
            this.setState({ focusedIndex: dataKey })
          },
          onMouseOut: (e) => {
            this.setState({ focusedIndex: null })
          },
          onMouseDown: (e) => this.onSelectValueBinded(opt.value, e)
        }, opt), i)
      })
    }
    return (
      <SelectMenuOuter
        className={classes.selectMenuOuter}
        data-select-menu-outer>
        <SelectMenu
          role="listbox"
          className={classes.selectMenu} data-select-menu>
          {selectOptions}
        </SelectMenu>
      </SelectMenuOuter>
    )
  }

  renderSelectClearZone() {
    const { clearable, classes } = this.props;

    if (!clearable) return;

    return (
      <SelectClearZone
        className={classes.selectClearZone}
        data-select-clear-zone onMouseDown={this.onClearValueBinded}>
        <SelectClear
          className={classes.selectClear} data-select-clear>×</SelectClear>
      </SelectClearZone>
    )
  }

  componentDidMount() {
    this.props.generatedClassName(this.selectNode.state.generatedClassName)
  }

  componentDidUpdate() {
    this.props.generatedClassName(this.selectNode.state.generatedClassName)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      options: nextProps.options,
      values: this.updateValues(nextProps)
    })
  }

  render () {
    const { name, disabled, className, classes, style, required } = this.props;
    const { value, isSelected, isOpened } = this.state;
    const values = Array.from(this.state.values)
    return (
      <Select style={style} data-select className={className} disabled={disabled}
        ref={(node) => this.selectNode = node} innerRef={(node) => this.selectInnerRef = node}>
        <input
          type={required ? "text" : "hidden"}
          name={name}
          style={{position: "absolute", zIndex: "0", outline: "none", opacity: "0"}}
          value={stringifyValue(values.length ? values : "" )}
          disabled={disabled} required={required} />
        <SelectControl
          disabled={disabled}
          isOpened={isOpened}
          aria-haspopup={isOpened}
          className={classes.selectControl}
          data-select-control onMouseDown={this.onSelectFocusedBinded}>
          {this.renderSelectMultiValueWrapper()}
          {this.renderSelectClearZone()}
          <SelectArrowZone
            className={classes.selectArrowZone} data-select-arrow-zone>
            <SelectArrow isOpened={isOpened} className={classes.selectArrow} data-select-arrow />
          </SelectArrowZone>
        </SelectControl>
        {this.renderSelectMenuOuter()}
      </Select>
    )
  }
}

WrapperSelect.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  onValueClick: PropTypes.func,
  tabIndex: PropTypes.string,
  closeMenuOnSelect: PropTypes.func,
  onInputClear: PropTypes.func,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object,
  noResultsText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  generatedClassName: PropTypes.func
}

WrapperSelect.defaultProps = {
  onClose: () => {},
  onOpen: () => {},
  onChange: () => {},
  onKeyUp: () => {},
  onKeyPress: () => {},
  onKeyDown: () => {},
  onInputChange: () => {},
  onTyping: () => {},
  onValueClick: () => {},
  onInputClear: () => {},
  tabIndex: '0',
  closeMenuOnSelect: () => {},
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
  valueRenderer: ValueRenderer,
  optionRenderer: OptionRenderer,
  generatedClassName: () => {}
}

const EnhanceWrapperSelect = enhanceWithClickOutside(WrapperSelect)
const ShadowWrapperSelect = shadowDOM(EnhanceWrapperSelect)

const NormalAsync = props => <SelectAsync {...props}><EnhanceWrapperSelect /></SelectAsync>
const ShadowAsync = props => <SelectAsync {...props}><ShadowWrapperSelect /></SelectAsync>

ShadowWrapperSelect.Async = ShadowAsync

export const Async  = EnhanceWrapperSelect.Async = NormalAsync
export const ShadowDOM = EnhanceWrapperSelect.ShadowDOM = ShadowWrapperSelect

export default EnhanceWrapperSelect
