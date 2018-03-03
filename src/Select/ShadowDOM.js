import React from 'react'
import Async from './Async'
import Select from '../Select'
import shadowDOM from '../helpers/shadowDOM'

const ShadowWrapper = shadowDOM(Select)

ShadowWrapper.Async = props => <Async {...props}><ShadowWrapper /></Async>

export default ShadowWrapper
