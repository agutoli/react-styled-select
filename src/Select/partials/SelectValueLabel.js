import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const globalCss = autoCssGenerator('select');
const g = autoCssGenerator('select-value-label');

export default styled.div`
  box-sizing: border-box;
  display: inline-block;
  ${globalCss('color')}
  ${g('font-family')}

  ${props => props.multi && g('padding')}
`
