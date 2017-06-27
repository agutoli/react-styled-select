import styled from 'styled-components'
import defaults from '../defaults.js'

const isOpened = () => (`
  transform: translateY(18%) rotate(-134deg);
`)

export default styled.div`
  box-sizing: border-box;
  font-family: ${defaults.fontFamily};
  font-family: var(--styled-select-arrow-font-family, ${defaults.fontFamily});

  border-style: none;

  /* FALLBACK */
  border-right-style: solid;
  border-bottom-style: solid;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-right-color: ${defaults.arrow__color};
  border-bottom-color: ${defaults.arrow__color};
  /* FALLBACK */

  border-right: 1px var(--styled-select-arrow-color, ${defaults.arrow__color}) solid;
  border-bottom: 1px var(--styled-select-arrow-color, ${defaults.arrow__color}) solid;

  border-bottom-right-radius: 25%;
  transform: translateY(-25%) rotate(45deg);

  ${props => props.isOpened && isOpened()}

  display: inline-block;
  height: 8px;
  width: 8px;
  position: relative;
`
