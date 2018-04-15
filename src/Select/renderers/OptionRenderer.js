import React from 'react'
import SelectOption from '../partials/SelectOption'

export default function OptionRenderer(option, index) {
  return (
    <SelectOption
      id={option.id}
      className={option.className}
      key={index}
      isSelected={option.isSelected}
      aria-selected={option.isSelected}
      tabIndex={option.tabIndex}
      isFocused={option.isFocused}
      data-key={option['data-key']}
      role="option"
      data-select-option={option.value}
      onMouseOut={option.onMouseOut}
      onMouseOver={option.onMouseOver}
      onMouseDown={option.onMouseDown}>
      {option.label}
    </SelectOption>
  )
}
