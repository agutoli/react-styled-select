import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-option');

const isFocused = () => (`
  ${g('color', 'focused')}
  ${g('background-color', 'focused')}
`)

const isSelected = () => (`
  ${g('color', 'selected')}
  ${g('background-color', 'selected')}
`)

export default styled.div`
  box-sizing: border-box;
  ${g('font-family')}
  ${g('background-color')}

  color: #666666;
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  ${props => props.isFocused && isFocused()}
  ${props => props.isSelected && isSelected()}

  &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`
