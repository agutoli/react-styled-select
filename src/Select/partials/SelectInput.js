import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  height: ${defaults.input__height};
  height: var(--styled-select-input-height, ${defaults.input__height});
  padding: ${defaults.input__padding};
  padding: var(--styled-select-input-padding, ${defaults.input__padding});
  vertical-align: middle;
  display: inline-table;
  margin: 0;
`
