import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-input');
const globalCss = autoCssGenerator('select');

export default styled.input`
  box-sizing: content-box;
  background: none transparent;
  border: 0 none;
  box-shadow: none;
  cursor: default;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;
  -webkit-appearance: none;

  ${g('line-height')}
  ${globalCss('color')}
`
