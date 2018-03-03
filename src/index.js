import React from 'react'
import Select from './Select'
import Async from './Select/Async'

Select.Async = function AsyncSelect (props) {
  return <Async {...props}><Select /></Async>
}

export default Select;
