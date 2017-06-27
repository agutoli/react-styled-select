import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import enhanceWithClickOutside from 'react-click-outside'

const KEY_UP = 38
const KEY_DOWN = 40
const KEY_ENTER = 13
const KEY_BACKSPACE = 8
const KEY_ESC = 27

import Select from './partials/Select'
import SelectMenu from './partials/SelectMenu'
import SelectValue from './partials/SelectValue'
import SelectClear from './partials/SelectClear'
import SelectArrow from './partials/SelectArrow'
import SelectInput from './partials/SelectInput'
import SelectInputField from './partials/SelectInputField'
import SelectOption from './partials/SelectOption'
import SelectControl from './partials/SelectControl'
import SelectClearZone from './partials/SelectClearZone'
import SelectArrowZone from './partials/SelectArrowZone'
import SelectValueLabel from './partials/SelectValueLabel'
import SelectMenuOuter from './partials/SelectMenuOuter'
import SelectPlaceholder from './partials/SelectPlaceholder'
import SelectMultiValueWrapper from './partials/SelectMultiValueWrapper'

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
      options: props.options
    }

    this.inputInnerRef = null
  }

  closeOptions() {
    this.setState({ isOpened: false });
  }

  setFocus() {
    setTimeout(() => {
      this.inputInnerRef && this.inputInnerRef.focus();
    }, 10);
  }

  // react-click-outside callback
  handleClickOutside() {
    this.closeOptions()
  }

  resetField() {
    this.setState({ value: null, searchTerm: null }, () => {
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
        valueLabel: label
      }, () => {
        this.props.onChange(newValue);
      })
    }
    this.closeOptions()
    this.props.onValueClick(newValue, event);
  }

  onSelectFocused = () => {
    this.setState({
      isOpened: true,
      isFocused: true
    })
    this.setFocus();
  }

  onSearching = (event) => {
    const { focusedIndex, options } = this.state;

    setTimeout(() => {
      const filteredOptions = this.props.options.filter((opt) => {
        const label = opt.label.toLowerCase()
        const term = this.inputInnerRef.value.toLowerCase()
        return label.indexOf(term) !== -1
      });
      this.setState({ searchTerm: this.inputInnerRef.value, options: filteredOptions })
    }, 1)

    const lastIndex = (options.length - 1)
    switch (event.keyCode) {
      case KEY_BACKSPACE: // backspace
        if (!this.inputInnerRef.value) {
          this.resetField()
        }
      case KEY_UP:
        this.setState({
          focusedIndex: (focusedIndex <= 0 ? lastIndex : (focusedIndex - 1))
        })
        return;
      case KEY_DOWN:
        this.setState({
          focusedIndex: (focusedIndex >= lastIndex ? 0 : (focusedIndex + 1))
        })
        return;
      case KEY_ENTER:
        if (!options.length) return;
        const newValue = options[focusedIndex].value
        this.onSelectValue(newValue, event)
        return;
      case KEY_ESC:
        this.closeOptions()
    }
  }

  renderSelectMultiValueWrapper() {
    const { placeholder } = this.props
    const { value, isSelected, valueLabel, searchTerm } = this.state

    let content = '';

    if (value && !searchTerm) {
      content = (
        <SelectValue data-select-value>
          <SelectValueLabel data-select-value-label>{valueLabel}</SelectValueLabel>
        </SelectValue>
      );
    }

    if (!value && !searchTerm) {
      content = (
        <SelectPlaceholder data-select-placeholder>{placeholder}</SelectPlaceholder>
      )
    }

    return (
      <SelectMultiValueWrapper data-select-multi-value-wrapper>
        {content}
        <SelectInput data-select-input>
          <SelectInputField
            data-select-input-search
            onKeyDown={this.onSearching}
            innerRef={(n) => this.inputInnerRef = n}
            role="combobox" type="text" />
        </SelectInput>
      </SelectMultiValueWrapper>
    );
  }

  renderSelectMenuOuter() {
    const { onOpen } = this.props;
    const { value, isOpened, focusedIndex, options } = this.state;

    if (!isOpened) return;

    onOpen()

    return (
      <SelectMenuOuter data-select-menu-outer>
        <SelectMenu data-select-menu>
          {options.map((opt, i) => (
            <SelectOption
              key={i}
              isSelected={value === opt.value}
              isFocused={focusedIndex === i}
              role="option"
              data-select-option={opt.value}
              onMouseDown={(e) => this.onSelectValue(opt.value, e)}>
              {opt.label}
            </SelectOption>
          ))}
        </SelectMenu>
      </SelectMenuOuter>
    )
  }

  renderSelectClearZone() {
    const { clearable } = this.props;

    if (!clearable) return;

    return (
      <SelectClearZone data-select-clear-zone onMouseDown={this.onClearValue}>
        <SelectClear data-select-clear>x</SelectClear>
      </SelectClearZone>
    );
  }

  render () {
    const { name, disabled } = this.props;
    const { value, isSelected } = this.state;
    return (
      <Select data-select>
        <input type="hidden" name={name} value={stringifyValue(value)} disabled={disabled} />
        <SelectControl data-select-control onMouseDown={this.onSelectFocused}>
          {this.renderSelectMultiValueWrapper()}
          {this.renderSelectClearZone()}
          <SelectArrowZone data-select-arrow-zone>
            <SelectArrow data-select-arrow />
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
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
  onValueClick: PropTypes.func,
  onInputClear: PropTypes.func,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string
}

WrapperSelect.defaultProps = {
  onOpen: () => {},
  onChange: () => {},
  onValueClick: () => {},
  onInputClear: () => {},
  clearable: true,
  options: [],
  placeholder: 'Select...'
}

export default enhanceWithClickOutside(WrapperSelect)
