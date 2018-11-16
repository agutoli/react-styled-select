import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-multi-value-wrapper');

export default styled.div`
  box-sizing: border-box;
  display: flex;
	align-items: center;
  align-content: space-around;
  flex: 2 100%;
  flex-wrap: wrap;
  outline: none;
  
  ${g('padding')}
`
