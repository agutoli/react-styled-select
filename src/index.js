import React from 'react'
import Select from './Select'
import Async from './Select/Async'

Select.Async = props => <Async {...props}><Select /></Async>

export default Select;
