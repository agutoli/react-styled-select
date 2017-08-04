import React from 'react'
import SelectOption from '../partials/SelectOption'

export default (option, index) => {
  return (
    <SelectOption
      id={option.id}
      className={option.className}
      key={index}
      isSelected={option.isSelected}
      aria-selected={option.isSelected}
      tabIndex={option.tabIndex}
      isFocused={option.isFocused}
      role="option"
      data-select-option={option.value}
      onMouseDown={option.onMouseDown}>
      {option.label}
    </SelectOption>
  )
}
