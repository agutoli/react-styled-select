import React from 'react'
import styled from 'styled-components'
import SelectValueIcon from './SelectValueIcon'
import { autoCssGenerator } from '../cssHelpers';

const g = autoCssGenerator('select-multi-value');

const SelectMultiValue = styled.div`
  overflow: hidden;

  ${g('border')}
  ${g('font-size')}
  ${g('margin')}
  ${g('box-shadow')}
  ${g('line-height')}
  ${g('border-radius')}
  ${g('background-color')}

  &:hover {
    ${g('border', 'hover')}
  }
`

export default (props) => {
  const _props = Object.assign({}, props)

  delete _props.onRemoveTag

  return (
    <SelectMultiValue {..._props}>
      <SelectValueIcon onMouseDown={(e) => props.onRemoveTag(props, e)}>×</SelectValueIcon>
      {props.children}
    </SelectMultiValue>
  )
}
