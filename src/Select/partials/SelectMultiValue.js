import React from 'react'
import styled from 'styled-components'
import defaults from '../defaults.js'
import SelectValueIcon from './SelectValueIcon'

const SelectMultiValue = styled.div`
  background-color: #ebf5ff;
  background-color: rgba(0, 126, 255, 0.08);
  border-radius: 2px;
  border: 1px solid #c2e0ff;
  border: 1px solid rgba(0, 126, 255, 0.24);
  font-size: 0.9em;
  line-height: 1.4;
  margin-right: 5px;
  margin-top: 2px;
  margin-bottom: 2px;
  box-shadow: rgba(0,0,0,0.2) 0px 0px 3px;

  &:hover {
    border: 1px solid #aaa;
  }
`

export default (props) => (
  <SelectMultiValue {...props}>
    <SelectValueIcon onMouseDown={(e) => props.onRemoveTag(props, e)}>×</SelectValueIcon>
    {props.children}
  </SelectMultiValue>
)
