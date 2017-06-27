import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  font-family: ${defaults.fontFamily};
  font-family: var(--styled-select-clear-font-family, ${defaults.fontFamily});
  font-size: ${defaults.clear__fontSize};
  font-size: var(--styled-select-clear-font-size, ${defaults.clear__fontSize});
  box-sizing: border-box;
  display: inline-block;
  line-height: 1;
`
