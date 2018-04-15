import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-no-results');

export default styled.div`
  display: block;
  cursor: default;
  box-sizing: border-box;

  ${g('color')}
  ${g('padding')}
  ${g('font-size')}
  ${g('font-family')}
`
