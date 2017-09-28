import React from 'react'

if (process.env.NODE_ENV !== 'test') {
  require('@webcomponents/shadydom');
}

import Async from './Async'
import Select from '../Select'
import shadowDOM from '../helpers/shadowDOM'

const ShadowWrapper = shadowDOM(Select)

ShadowWrapper.Async = props => <Async {...props}><ShadowWrapper /></Async>

export default ShadowWrapper
