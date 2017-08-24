import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import enhanceWithClickOutside from 'react-click-outside'
import uuid from 'uuid';

import {
  KEY_UP,
  KEY_ESC,
  KEY_DOWN,
  KEY_ENTER,
  KEY_BACKSPACE
} from './constants'

import Select from './partials/Select'
import SelectMenu from './partials/SelectMenu'
import SelectValue from './partials/SelectValue'
import SelectClear from './partials/SelectClear'
import SelectArrow from './partials/SelectArrow'
import SelectInput from './partials/SelectInput'
import SelectInputField from './partials/SelectInputField'
import SelectControl from './partials/SelectControl'
import SelectNoResults from './partials/SelectNoResults'
import SelectClearZone from './partials/SelectClearZone'
import SelectArrowZone from './partials/SelectArrowZone'
import SelectMenuOuter from './partials/SelectMenuOuter'
import SelectPlaceholder from './partials/SelectPlaceholder'
import SelectMultiValueWrapper from './partials/SelectMultiValueWrapper'

import ValueRenderer from './renderers/ValueRenderer'
import OptionRenderer from './renderers/OptionRenderer'

import stringifyValue from './functions/stringifyValue'

class WrapperSelect extends React.PureComponent {
  constructor(props) {
    super(props)

    this.optionsMap = props.options.reduce((agregate, current) => {
      agregate[current.value] = current
      return agregate
    }, {})

    let valueLabel = null
    if (props.value && this.optionsMap.hasOwnProperty(props.value)) {
      valueLabel = this.optionsMap[props.value].label
    }

    this.state = {
      isOpened: false,
      isFocused: false,
      isSelected: false,
      value: props.value,
      valueLabel,
      searchTerm: null,
      focusedIndex: 0,
      options: props.options,
      'aria-owns': this.props['aria-owns'] || uuid.v4()
    }

    this.inputInnerRef = null
  }

  openOptions() {
    this.setState({ focusedIndex: 0, isOpened: true });
  }

  closeOptions() {
    this.setState({ isOpened: false });
    this.props.onClose();
  }

  setFocus() {
    setTimeout(() => {
      this.inputInnerRef && this.inputInnerRef.focus();
    }, 10);
  }

  // react-click-outside callback
  handleClickOutside(event){
    if (event.target.tagName === 'HTML' || event.target.tagName === 'DIV') {
      if (this.state.isOpened) {
        this.closeOptions()
      }
    }
  }

  resetField() {
    this.setState({
      value: null,
      searchTerm: null,
      options: this.props.options,
    }, () => {
      this.closeOptions()
      this.inputInnerRef.value = ''
      this.props.onInputClear()
    })
  }

  onClearValue = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.resetField();
  }

  onSelectValue = (newValue, event) => {
    const { value } = this.state;
    const label = this.optionsMap[newValue].label;
    if (value != newValue) {
      this.setState({
        value: newValue,
        valueLabel: label,
        searchTerm: null
      }, () => {
        this.inputInnerRef.value = ''
        this.props.onChange(newValue);
      })
    }
    this.closeOptions()
    this.props.onValueClick(newValue, event);
  }

  onSelectFocused = () => {
    this.openOptions();
    this.setState({
      isFocused: true
    })
    this.setFocus();
  }

  onSearching = (event) => {
    const { focusedIndex, options, isOpened } = this.state;

    const typing = () => {
      const filteredOptions = this.props.options.filter((opt) => {
        const label = opt.label.toLowerCase()
        const term = this.inputInnerRef.value.toLowerCase()
        return label.indexOf(term) !== -1
      });

      this.setState({
        searchTerm: this.inputInnerRef.value,
        options: filteredOptions,
        isOpened: true
      })
    }

    const lastIndex = (options.length - 1)
    switch (event.keyCode) {
      case KEY_BACKSPACE: // backspace
        if (!this.inputInnerRef.value) {
          this.resetField()
          break;
        }
        setTimeout(typing, 1);
        break;
      case KEY_UP:
        this.setState({
          focusedIndex: (focusedIndex <= 0 ? lastIndex : (focusedIndex - 1))
        })
        break;
      case KEY_DOWN:
        if (!isOpened) {
          this.openOptions();
          break;
        }
        this.setState({
          focusedIndex: (focusedIndex >= lastIndex ? 0 : (focusedIndex + 1))
        })
        break;
      case KEY_ENTER:
        if (!options.length) break;
        const newValue = options[focusedIndex].value
        this.onSelectValue(newValue, event)
        break;
      case KEY_ESC:
        this.closeOptions()
        break;
      default:
        setTimeout(typing, 1);
    }
  }

  renderSelectMultiValueWrapper() {
    const { placeholder, searchable, classes, valueRenderer } = this.props
    const { value, isOpened, isSelected, valueLabel, searchTerm } = this.state

    let content = '';

    if (value && !searchTerm) {
      content = (
        <SelectValue className={classes.selectValue} data-select-value>
          {valueRenderer({ value, label: valueLabel }, classes.selectValueLabel)}
        </SelectValue>
      );
    }

    if (!value && !searchTerm) {
      content = (
        <SelectPlaceholder
          className={classes.selectPlaceholder}
          data-select-placeholder>{placeholder}</SelectPlaceholder>
      )
    }

    if (!searchable) {
      return (
        <SelectMultiValueWrapper
        className={classes.selectMultiValueWrapper}
        data-select-multi-value-wrapper>
          {content}
        </SelectMultiValueWrapper>
      );
    }


    return (
      <SelectMultiValueWrapper
        className={classes.selectMultiValueWrapper}
        data-select-multi-value-wrapper>
        {content}
        <SelectInput data-select-input className={classes.selectInput}>
          <SelectInputField
            className={classes.selectInputField}
            data-select-input-search
            onKeyDown={this.onSearching}
            innerRef={(n) => this.inputInnerRef = n}
            aria-label={placeholder}
            aria-expanded={isOpened}
            aria-owns={this.state['aria-owns']}
            role="combobox" type="text" />
        </SelectInput>
      </SelectMultiValueWrapper>
    );
  }

  renderSelectMenuOuter() {
    const { onOpen, classes, noResultsText, optionRenderer } = this.props;
    const { value, isOpened, focusedIndex, options } = this.state;

    if (!isOpened) {
      return (
        <div aria-hidden="true" id={this.state['aria-owns']} role="listbox">
          <div role="option" tabIndex="-1" />
        </div>
      );
    }

    onOpen()

    let selectOptions = <SelectNoResults>{noResultsText}</SelectNoResults>;

    if (options.length > 0) {
      selectOptions = options.map((opt, i) => {
        const isSelected = value === opt.value;
        const isFocused = focusedIndex === i;
        return optionRenderer(Object.assign({
          key: i,
          'data-key': i,
          isSelected,
          id: this.state['aria-owns'],
          className: classes.selectOption,
          isFocused: focusedIndex == i,
          tabIndex: value === opt.value ? '0' : '-1',
          onMouseOver: (e) => {
            const dataKey = e.target.getAttribute('data-key');
            this.setState({ focusedIndex: dataKey });
          },
          onMouseOut: (e) => {
            console.log('asdsad')
            this.setState({ focusedIndex: null });
          },
          onMouseDown: (e) => this.onSelectValue(opt.value, e)
        }, opt), i);
      });
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
        data-select-clear-zone onMouseDown={this.onClearValue}>
        <SelectClear
          className={classes.selectClear} data-select-clear>x</SelectClear>
      </SelectClearZone>
    );
  }

  componentDidMount() {
    this.props.generatedClassName(this.selectNode.state.generatedClassName);
  }

  componentDidUpdate() {
    this.props.generatedClassName(this.selectNode.state.generatedClassName);
  }

  render () {
    const { name, disabled, className, classes } = this.props;
    const { value, isSelected, isOpened } = this.state;
    return (
      <Select data-select className={className}
        ref={(node) => this.selectNode = node} innerRef={(node) => this.selectInnerRef = node}>
        <input type="hidden" name={name} value={stringifyValue(value)} disabled={disabled} />
        <SelectControl
          isOpened={isOpened}
          aria-haspopup={isOpened}
          className={classes.selectControl}
          data-select-control onMouseDown={this.onSelectFocused}>
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
  onValueClick: PropTypes.func,
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
  onValueClick: () => {},
  onInputClear: () => {},
  clearable: false,
  searchable: true,
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

export default enhanceWithClickOutside(WrapperSelect)
