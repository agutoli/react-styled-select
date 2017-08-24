import styled from 'styled-components'
import defaults from '../defaults.js'

const isFocused = () => (`
  color: #333;
  color: var(--styled-select-option-focused-color, #333);
  background-color: #f0f0f5;
  background-color: var(--styled-select-option-focused-background-color, #f0f0f5);
`)

const isSelected = () => (`
  color: #333;
  color: var(--styled-select-option-selected-color, #333);
  background-color: #ddd;
  background-color: var(--styled-select-option-selected-background-color, #ddd);
`)

export default styled.div`
  box-sizing: border-box;

  font-family: ${defaults.fontFamily};
  font-family: var(--styled-select-option-font-family, ${defaults.fontFamily});

  background-color: #fff;
  background-color: var(--styled-select-option-background-color, #fff);

  color: #666666;
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  ${props => props.isSelected && isSelected()}
  ${props => props.isFocused && isFocused()}



  &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`
