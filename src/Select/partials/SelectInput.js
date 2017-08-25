import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-input');

export default styled.div`
  vertical-align: middle;
  display: inline-table;
  margin: 0;
  ${g('height')}
  ${g('padding')}
`
