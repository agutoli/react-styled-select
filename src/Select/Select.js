import React from 'react'
import ReactDOM from 'react-dom'
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
import SelectMenuVirtualized from './partials/SelectMenuVirtualized'
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
      currentMenuScrollTop: 0,
      options: props.options,
      'aria-owns': this.props['aria-owns'] || uuid.v4(),
      'input-field-id': uuid.v4()
    }

    this.scrollerRef = null
    this.inputRef = null
    this.searchSizeRef = null
    this.shouldFireClickOutsideHack = null

    this.onSearchingBinded = this.onSearching.bind(this)
    this.onRemoveTagBinded = this.onRemoveTag.bind(this)
    this.onClearValueBinded = this.onClearValue.bind(this)
    this.onSelectValueBinded = this.onSelectValue.bind(this)
    this.onSelectFocusedBinded = this.onSelectFocused.bind(this)
    this.onSelectMenuScrollerBinded = this.onSelectMenuScroller.bind(this)
    this.setRefAtVirtualizedBinded = this.setRefAtVirtualized.bind(this)
  }

  updateValues(props) {
    this.indexValues(props)

    let values = [];
    if ((props.value && !Array.isArray(props.value)) && this.optionsMap.hasOwnProperty(props.value)) {
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
    const { virtualized } = this.props;
    const { currentMenuScrollTop } = this.state;

    if (this.scrollerRef && virtualized) {
      window.setTimeout(() => {
        this.scrollerRef.scrollTop = currentMenuScrollTop
      }, 1)
    }

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
      _this.inputRef && _this.inputRef.focus()
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
      this.inputRef.value = ''
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
        this.inputRef.value = ''
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
      const term = this.inputRef.value.toLowerCase().trim()

      onTyping(term)

      const filteredOptions = this.getOptions().filter((opt) => {
        if (typeof opt.label !== 'string') {
          return true;
        }

        const label = opt.label.toLowerCase().trim()
        return label.indexOf(term) !== -1
      })

      this.setState({
        searchTerm: this.inputRef.value,
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
        this.setState({ searchWidth, currentMenuScrollTop: 0 })
      })
    }

    const lastIndex = (options.length - 1)
    switch (event.keyCode) {
      case KEY_BACKSPACE: // backspace
        if (!this.inputRef.value) {
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
          {valueRenderer({ multi, value, label: (this.optionsMap[value]||{}).label }, classes.selectValueLabel)}
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

    if (!searchable) {
      return (
        <SelectWrapperComp
          htmlFor={this.state['input-field-id']}
          ref={(node) => {
            if (node) {
              this.inputRef = node
              if (!node.focus) {
                this.inputRef = ReactDOM.findDOMNode(node);
              }
            }
          }}
          className={classes.selectMultiValueWrapper}
          onFocus={this.onSelectFocusedBinded}
          onKeyDown={this.onSearchingBinded}
          onKeyUp={this.props.onKeyUp}
          onBlur={this.props.onBlur}
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
            ref={(node) => {
              if (node) {
                this.inputRef = node
                if (!node.focus) {
                  this.inputRef = ReactDOM.findDOMNode(node);
                }
              }
            }}
            aria-label={placeholder}
            aria-expanded={isOpened}
            aria-owns={this.state['aria-owns']}
            role="combobox" type="text" />
        </SelectInput>
        <SelectInputFieldSize
          data-select-input-size
          ref={(node) => {
            this.searchSizeRef = node
            if (node) {
              if (!node.focus) {
                this.searchSizeRef = ReactDOM.findDOMNode(node);
              }
            }
          }}>{searchTerm}</SelectInputFieldSize>
      </SelectWrapperComp>
    )
  }

  onSelectMenuScroller(event) {
    this.setState({
      currentMenuScrollTop: event.target.scrollTop
    })
  }

  renderSelectMenuOuter() {
    const {
      classes,
      noResultsText,
      optionRenderer,
      disabled,
      virtualizedMaxHeight,
      virtualizedOptionHeight,
      virtualized
    } = this.props;

    const {
      values,
      isOpened,
      focusedIndex,
      options,
      currentMenuScrollTop
    } = this.state;

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
        const elementTopPosition = (virtualizedOptionHeight * i) + virtualizedOptionHeight
        const isTopHidden = currentMenuScrollTop > elementTopPosition
        const isBottomHidden = currentMenuScrollTop < (elementTopPosition - (virtualizedMaxHeight + virtualizedOptionHeight))

        if ((isTopHidden || isBottomHidden) && virtualized) {
          return null
        }

        const isSelected = values.has(opt.value)
        const isFocused = focusedIndex === i;
        return optionRenderer(Object.assign({
          key: i,
          'data-key': i,
          isSelected,
          virtualized,
          id: this.state['aria-owns'],
          virtualizedOptionHeight: virtualizedOptionHeight,
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
        {virtualized ?
          this.renderSelectMenuVirtualizedOptions(selectOptions) :
          this.renderSelectMenuOptions(selectOptions)}
      </SelectMenuOuter>
    )
  }

  renderSelectMenuOptions(selectOptions) {
    const { classes } = this.props;
    return (
      <SelectMenu
        role="listbox"
        className={classes.selectMenu} data-select-menu>
        {selectOptions}
      </SelectMenu>
    )
  }

  setRefAtVirtualized(node) {
    if (node) {
      this.scrollerRef = node
    }
  }

  renderSelectMenuVirtualizedOptions(selectOptions) {
    const { classes, virtualizedMaxHeight, virtualizedOptionHeight } = this.props;
    const { options } = this.state;
    const scrollHeight = options.length * virtualizedOptionHeight

    return (
      <SelectMenuVirtualized
        ref={this.setRefAtVirtualizedBinded}
        role="listbox"
        style={{
          height: `${virtualizedMaxHeight}px`,
          maxHeight: `${virtualizedMaxHeight}px`
        }}
        onScroll={this.onSelectMenuScrollerBinded}
        className={classes.selectMenu} data-select-menu>
        <div style={{height: `${scrollHeight}px`, position: 'relative'}}>
          {selectOptions}
        </div>
      </SelectMenuVirtualized>
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
    if (this.selectNode) {
      this.props.generatedClassName(this.selectNode.className)
    }
  }

  componentDidUpdate() {
    if (this.selectNode) {
      this.props.generatedClassName(this.selectNode.className)
    }
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

    const setRef = (node) => {
      this.selectNode = node
      if ((node) && !node.focus) {
        this.selectNode = ReactDOM.findDOMNode(node);
      }
    }

    return (
      <Select style={style} data-select className={className} disabled={disabled}
        ref={setRef}>
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
  onBlur: PropTypes.func,
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
  virtualized: PropTypes.bool,
  virtualizedMaxHeight: PropTypes.number,
  virtualizedOptionHeight: PropTypes.number,
  onInputClear: PropTypes.func,
  clearable: PropTypes.bool,
  placeholder: PropTypes.any,
  className: PropTypes.string,
  classes: PropTypes.object,
  noResultsText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  generatedClassName: PropTypes.func
}

WrapperSelect.defaultProps = {
  onBlur: () => {},
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
  virtualized: false,
  virtualizedMaxHeight: 198,
  virtualizedOptionHeight: 38,
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
