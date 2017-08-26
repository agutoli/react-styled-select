import styled from 'styled-components'

import { autoCssGenerator } from '../cssHelpers';

const globalCss = autoCssGenerator('select');
const g = autoCssGenerator('select-control');

const isOpened = () => `
  ${g('border-color', 'focused')}
`

export default styled.div`
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  border-spacing: 0;
  border-collapse: separate;
  outline: none;
  overflow: hidden;
  width: 100%;

  ${g('border-color')}
  ${g('min-height')}
  ${globalCss('border-radius')}
  ${globalCss('border-style')}
  ${globalCss('border-width')}
  ${globalCss('background-color')}

  ${props => props.isOpened && isOpened()}
 `
