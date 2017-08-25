import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-value-icon');

export default styled.div`
  box-sizing: border-box;
  border-right: 1px solid;
  display: inline-block;
  ${g('color')}
  ${g('padding')}
  ${g('font-family')}
  ${g('background-color')}

  &:hover {
    ${g('background-color', 'hover')}
    cursor: pointer;
  }
`
