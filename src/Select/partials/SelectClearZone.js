import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  box-sizing: border-box;
  color: ${defaults.clearZone__color};
  color: var(--styled-select-clear-font-size, ${defaults.clearZone__color});
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 17px;
`
