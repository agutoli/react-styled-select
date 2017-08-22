import styled from 'styled-components'
import SelectInputField from './SelectInputField';

export default SelectInputField.withComponent('div').extend`
  position: absolute;
  top: 0px;
  left: 0px;
  visibility: hidden;
  height: 0px;
  overflow: scroll;
  white-space: pre;
`;
