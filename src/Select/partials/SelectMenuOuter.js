import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  background-color: #fff;
  background-color: var(--styled-select-menu-outer-background-color, #fff);

  border-color: #e6e6e6 #ccc #ccc #ccc;
  border-color: var(--styled-select-menu-outer-border-color, #e6e6e6 #ccc #ccc #ccc);

  border-width: 1px;
  border-width: var(--styled-select-menu-outer-border-width, 1px);

  border-style: solid;
  border-style: var(--styled-select-menu-outer-border-style, solid);

  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;

  margin: -1px 0 0 0;
  margin: var(--styled-select-menu-outer-margin, -1px 0 0 0);

  padding: 0;
  padding: var(--styled-select-menu-outer-padding, 0);

  max-height: 200px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
`
