import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-menu-outer');

export default styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;

  ${g('margin')}
  ${g('padding')}
  ${g('max-height')}
  ${g('box-shadow')}
  ${g('border-color')}
  ${g('border-width')}
  ${g('border-style')}
  ${g('border-radius')}
  ${g('background-color')}
`
