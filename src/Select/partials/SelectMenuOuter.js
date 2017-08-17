import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  border-radius: 2px;
  border-radius: var(--styled-select-menu-outer-border-radius, 2px);

  background-color: #fff;
  background-color: var(--styled-select-menu-outer-background-color, #fff);

  border-color:  #f0f0f5;
  border-color: var(--styled-select-menu-outer-border-color, #f0f0f5);

  border-width: 1px;
  border-width: var(--styled-select-menu-outer-border-width, 1px);

  border-style: solid;
  border-style: var(--styled-select-menu-outer-border-style, solid);

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  margin: 5px 0 0 0;
  margin: var(--styled-select-menu-outer-margin, 5px 0 0 0);

  padding: 0;
  padding: var(--styled-select-menu-outer-padding, 0);

  max-height: 200px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
`
