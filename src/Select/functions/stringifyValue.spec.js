import React from 'react'
import { expect } from 'chai'

import stringifyValue from './stringifyValue'

describe('stringifyValue', () => {
  it('should return string when param is number', () => {
    expect(stringifyValue(1)).to.equal('1')
  })

  it('should return string when param is object', () => {
    const objValue = {
      "a": "b"
    }
    expect(stringifyValue(objValue)).to.equal('{"a":"b"}')
  })

  it('should return string when param is array', () => {
    const arrayValue = ['foo', 'bar']
    expect(stringifyValue(arrayValue)).to.equal('["foo","bar"]')
  })
})
