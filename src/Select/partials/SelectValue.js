import styled from 'styled-components'
import defaults from '../defaults.js'

export default styled.div`
  color: ${defaults.value__color};
  color: var(--styled-select-value-color, ${defaults.value__color});

  line-height: ${defaults.value__lineHeight};
  line-height: var(--styled-select-value-line-height, ${defaults.value__lineHeight});

  padding: ${defaults.value__padding};
  padding: var(--styled-select-value-padding, ${defaults.value__padding});

  max-width: ${defaults.value__maxWidth};
  max-width: var(--styled-select-value-max-width, ${defaults.value__maxWidth});

  overflow: ${defaults.value__overflow};
  overflow: var(--styled-select-value-overflow, ${defaults.value__overflow});

  text-overflow: ${defaults.value__textOverflow};
  text-overflow: var(--styled-select-value-text-overflow, ${defaults.value__textOverflow});

  white-space: ${defaults.value__whiteSpace};
  white-space: var(--styled-select-value-white-space, ${defaults.value__whiteSpace});
  display: inline-block;
  vertical-align: top;
`
