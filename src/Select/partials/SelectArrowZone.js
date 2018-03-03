import styled from 'styled-components'

import { autoCssGenerator } from '../cssHelpers';
const g = autoCssGenerator('select-arrow-zone');

export default styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  text-align: center;
  vertical-align: middle;
  padding-right: 5px;
  display: flex;
  justify-content: center;

  ${g('width')}
`
