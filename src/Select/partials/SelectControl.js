import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  background-color: #fff;
  background-color: var(--styled-select-background-color, #fff);

  border-color: #d9d9d9 #ccc #b3b3b3; /* fallback */
  border-color: var(--styled-select-border-color, #d9d9d9 #ccc #b3b3b3);

  border-width: 1px; /* fallback */
  border-width: var(--styled-select-border-width, 1px);

  border-style: solid; /* fallback */
  border-style: var(--styled-select-border-style, solid);

  border-radius: 2px;
  border-radius: var(--styled-select-border-radius, 2px);

  color: #333;
  cursor: default;
  display: table;
  border-spacing: 0;
  border-collapse: separate;
  height: 36px;
  outline: none;
  overflow: hidden;
  position: relative;
  width: 100%;
 `
