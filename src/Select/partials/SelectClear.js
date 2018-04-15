import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-clear');

export default styled.div`
  box-sizing: border-box;
  display: inline-block;
  line-height: 1;

  ${g('color')}
  ${g('font-size')}
`
