import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-menu');

export default styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  ${g('border-radius')}
`
