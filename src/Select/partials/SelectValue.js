import React from 'react'
import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers';

const globalCss = autoCssGenerator('select');
const g = autoCssGenerator('select-value');

const SelectValue = styled.div`
  display: inline-block;
  vertical-align: top;

  ${g('color')}
  ${g('padding')}
  ${g('max-width')}
  ${g('overflow')}
  ${g('font-size')}
  ${g('text-overflow')}
  ${g('line-height')}
  ${g('white-space')}
`

export default (props) => {
  const _props = Object.assign({}, props)

  delete _props.onRemoveTag

  return (
    <SelectValue {..._props} />
  )
}
