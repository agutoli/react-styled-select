import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { expect } from 'chai'

import { shallow, mount } from 'enzyme';

import shadowDOM from './shadowDOM'

import styled from 'styled-components'

const MyDiv = styled.div`
  box-sizing: border-box;
  position: relative;
`

class MyComponent extends React.PureComponent {
  render() {
    return (
      <MyDiv ref={(node) => {
        this.selectNode = node
        if (!node.focus) {
          this.selectNode = ReactDOM.findDOMNode(node);
        }
      }}>Teste</MyDiv>
    )
  }
  componentDidMount() {
    if (!this.props.noGenerateClass) {
      this.props.generatedClassName(this.selectNode.className);
    } else {
      this.props.generatedClassName('notexistentsclass');
    }
  }
}

describe('<shadowDOMHelper />', () => {
  it('should have a style tag with styles', () => {
    const ShadowComp = shadowDOM(MyComponent)
    const wrapper = mount(<ShadowComp />);
    expect(wrapper.html()).to.have.string('<style')
    expect(wrapper.html()).to.have.string('position:relative')
  })

  it('should not have any style class', () => {
    const ShadowComp = shadowDOM(MyComponent)
    const wrapper = mount(<ShadowComp noGenerateClass />);
    expect(wrapper.find('.resolved').length).to.equal(1);
  })
});
