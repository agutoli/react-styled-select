import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const globalCss = autoCssGenerator('select');
const g = autoCssGenerator('select-value');

export default styled.div`
  display: inline-block;
  vertical-align: top;
  ${g('color')}
  ${g('padding')}
  ${g('max-width')}
  ${g('overflow')}
  ${g('font-size')}
  ${g('text-overflow')}
  ${g('line-height')}
  ${g('white-space')}
`
