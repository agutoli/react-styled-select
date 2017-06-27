import styled from 'styled-components'
import defaults from '../defaults.js'

const isOpened = () => `
  border-color: ${defaults.control__focused__borderColor}; /* fallback */
  border-color: var(--styled-select-control-focused-border-color, ${defaults.control__focused__borderColor});
`

export default styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  background-color: var(--styled-select-background-color, #fff);

  border-color: ${defaults.control__borderColor}; /* fallback */
  border-color: var(--styled-select-control-border-color, ${defaults.control__borderColor});

  ${props => props.isOpened && isOpened()}

  border-width: 1px; /* fallback */
  border-width: var(--styled-select-border-width, 1px);

  border-style: solid; /* fallback */
  border-style: var(--styled-select-border-style, solid);

  border-radius: 2px;
  border-radius: var(--styled-select-border-radius, 2px);

  color: #333;
  cursor: default;
  border-spacing: 0;
  border-collapse: separate;
  height: 36px;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
 `
