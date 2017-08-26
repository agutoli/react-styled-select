import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-placeholder');

export default styled.div`
  text-overflow: ellipsis;
  position: absolute;
  display: inline-block;
  white-space: nowrap;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  overflow: hidden;

  ${g('color')}
  ${g('padding')}
  ${g('font-size')}
  ${g('font-family')}
  ${g('line-height')}
`
