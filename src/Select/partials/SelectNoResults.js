import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  box-sizing: border-box;
  color: ${defaults.no__results__color};
  color: var(--styled-select-no-results-color, ${defaults.no__results__color});
  cursor: default;
  display: block;
  padding: ${defaults.no__results__padding};
  padding: var(--styled-select-no-results-padding, ${defaults.no__results__padding});
`
