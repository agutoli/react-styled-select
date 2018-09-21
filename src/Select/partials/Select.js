import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select');

const isDisabled = () => `
  ${g('cursor', 'disabled')}
  ${g('opacity', 'disabled')}
  > * {
    ${g('pointer-events', 'disabled')}
  }
`

export default styled.div`
  ${g('box-sizing')}
  ${g('position')}

  ${props => props.disabled && isDisabled()}
`
