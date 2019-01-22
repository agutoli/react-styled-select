import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-value-wrapper');

export default styled.div`
  ${g('box-sizing')}
  ${g('display')}
  ${g('align-items')}
  ${g('align-content')}
  ${g('flex')}
  ${g('padding')}
`
