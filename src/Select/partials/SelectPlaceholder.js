import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  bottom: 0;
  font-size: 12px;
  font-size: var(--styled-select-placeholder-font-size, 12px);
  font-family: ${defaults.fontFamily};
  font-family: var(--styled-select-placeholder-font-family, ${defaults.fontFamily});
  color: #d2d2d9;
  color: var(--styled-select-placeholder-color, #d2d2d9);
  left: 0;
  line-height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  right: 0;
  top: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
