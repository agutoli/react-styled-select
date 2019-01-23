import React from 'react'
import SelectOption from '../partials/SelectOption'

export default function OptionRenderer(option, index) {
  let style = {}
  if (option.virtualized) {
    style = {
      position: 'absolute',
      width: '100%',
      top: `${option.virtualizedOptionHeight * index}px`,
      maxHeight: `${option.virtualizedOptionHeight}px`,
      height: `${option.virtualizedOptionHeight}px`
    }
  }
  return (
    <SelectOption
      id={option.id}
      style={style}
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
