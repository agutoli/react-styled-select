import styled from 'styled-components'
import { autoCssGenerator, cssVar } from '../cssHelpers';

const v = cssVar('select-arrow');
const g = autoCssGenerator('select-arrow');

const isOpened = () => (`
  margin-top: ${v('size')/2}px;
  transform: rotate(-134deg);
`)

export default styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  ${g('border-right')}
  ${g('font-family')}

  border-style: none;

  /* FALLBACK */
  border-right-style: solid;
  border-bottom-style: solid;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-right-color: ${v('color')};
  border-bottom-color: ${v('color')};
  /* FALLBACK */

  border-right: 1px ${v('color')} solid;
  border-right: 1px var(--styled-select-arrow__color, ${v('color')}) solid;
  border-bottom: 1px ${v('color')} solid;
  border-bottom: 1px var(--styled-select-arrow__color, ${v('color')}) solid;

  border-bottom-right-radius: 25%;
  transform: rotate(45deg);

  ${props => props.isOpened && isOpened()}

  height: ${v('size')}px;
  width: ${v('size')}px;
`
