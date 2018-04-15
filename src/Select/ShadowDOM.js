import React from 'react'
import Async from './Async'
import Select from '../Select'
import shadowDOM from '../helpers/shadowDOM'

const ShadowWrapper = shadowDOM(Select)

ShadowWrapper.Async = function AsyncShadowDOM(props) {
  return <Async {...props}><ShadowWrapper /></Async>
}

export default ShadowWrapper
