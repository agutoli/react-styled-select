import styled from 'styled-components'

import { autoCssGenerator } from '../cssHelpers';
const g = autoCssGenerator('select-clear-zone');

export default styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  text-align: center;
  vertical-align: middle;
  display: table-cell;

  ${g('width')}
`
