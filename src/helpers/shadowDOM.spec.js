import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import shadowDOM from './shadowDOM';

import styled from 'styled-components'

const MyDiv = styled.div`
  box-sizing: border-box;
  position: relative;
`

class MyComponent extends React.PureComponent {
  render() {
    return (
      <MyDiv ref={(node) => this.selectNode = node}>Teste</MyDiv>
    )
  }
  componentDidMount() {
    if (!this.props.noGenerateClass) {
      this.props.generatedClassName(this.selectNode.state.generatedClassName);
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
