import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import Select from './Select';

import {
  KEY_UP,
  KEY_ESC,
  KEY_DOWN,
  KEY_ENTER,
  KEY_BACKSPACE
} from './constants'

const typing = (input, value, opts, callback) => {

  const options = callback ? opts : {}
  const _callback = callback ? callback : opts

  input.node.value = value
  input.simulate('keyDown', options);
  setTimeout(_callback, 1);
}

const options = [
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 }
]

describe('<Select />', () => {
  it('should have default placeholder text', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.find('[data-select-placeholder]').at(0).text()).to.equal('Select...');
  })

  it('should have custom placeholder text', () => {
    const wrapper = mount(<Select placeholder="My placeholder" />);
    expect(wrapper.find('[data-select-placeholder]').at(0).text()).to.equal('My placeholder');
  })

  it('should have two options lists', () => {
    const wrapper = mount(<Select options={options} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');

    expect(wrapper.find('[data-select-option]').length).to.equal(2);
  })

  it('should call onChange callback when value change', () => {
    const onChangeSpy = sinon.spy()
    const wrapper = mount(<Select onChange={onChangeSpy} options={options} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    wrapper.find('[data-select-option]').at(0).simulate('mouseDown');
    expect(onChangeSpy).to.have.property('callCount', 1);
  })

  it('should call callback onOpen', () => {
    const onOpenSpy = sinon.spy()
    const wrapper = mount(<Select onOpen={onOpenSpy} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    expect(onOpenSpy).to.have.property('callCount', 1);
  })

  it('should call callback onValueClick', () => {
    const onValueClickSpy = sinon.spy()
    const wrapper = mount(<Select onValueClick={onValueClickSpy} options={options} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    wrapper.find('[data-select-option]').at(0).simulate('mouseDown');
    expect(onValueClickSpy).to.have.property('callCount', 1);
  })

  it('should close when click outside', (done) => {
    const onValueClickSpy = sinon.spy()
    const target = document.createElement('div')
    document.body.appendChild(target)

    const wrapper = mount(<Select onValueClick={onValueClickSpy} />, { attachTo: target });
    wrapper.find('[data-select-control]').at(0).simulate('click');
    setTimeout(() => {
      target.click()// Click outside
      expect(wrapper.find('[data-select-menu-outer]').length).to.equal(0);
      done()
    }, 200)
  })

  it('should close when click over some option', () => {
    const wrapper = mount(<Select options={options} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    wrapper.find('[data-select-option]').at(0).simulate('mouseDown');
    expect(wrapper.find('[data-select-menu-outer]').length).to.equal(0);
  })

  it('should search disabled when searchable=false', () => {
    const wrapper = mount(<Select options={options} searchable={false} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    expect(wrapper.find('[data-select-input]').length).to.equal(0);
  })

  it('should change field value when click over a option', () => {
    const wrapper = mount(<Select options={options} />);
    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    wrapper.find('[data-select-option]').at(0).simulate('mouseDown');
    expect(wrapper.find('[data-select-value-label]').at(0).text()).to.equal('One');
  })

  it('should began with initial value selected', () => {
    const onValueClickSpy = sinon.spy()
    const wrapper = mount(<Select options={options} value={2} />);
    const selecteValueLabel = wrapper.find('[data-select-value-label]').at(0).text();
    expect(selecteValueLabel).to.equal('Two');
  })

  it('should have clear button by default', () => {
    const wrapper = mount(<Select clearable={true} />);
    expect(wrapper.find('[data-select-clear-zone]').length).to.equal(1);
  })

  it('should hidden clear button when clearable=false', () => {
    const onValueClickSpy = sinon.spy()
    const wrapper = mount(<Select clearable={false} />);
    expect(wrapper.find('[data-select-clear-zone]').length).to.equal(0);
  })

  it('should clear field when click over clear zone', () => {
    const onValueClickSpy = sinon.spy()
    const wrapper = mount(<Select options={options} value={2} clearable={true} />);
    wrapper.find('[data-select-clear-zone]').at(0).simulate('mouseDown');
    expect(wrapper.find('[data-select-placeholder]').length).to.equal(1);
  })


  it('should hidden placeholder when sarching', (done) => {
    const wrapper = mount(<Select />);
    const input = wrapper.find('[data-select-input-search]').at(0)

    // simulate type
    input.node.value = 'some term'
    input.simulate('keyDown');

    setTimeout(() => {
      expect(wrapper.find('[data-select-placeholder]').length).to.equal(0);
      expect(wrapper.find('[data-select-value-label]').length).to.equal(0);
      done()
    }, 2)
  })

  it('should reset field when search (field == empty && press backspace event)', (done) => {
    const onInputClearSpy = sinon.spy()
    const wrapper = mount(<Select onInputClear={onInputClearSpy} options={options} value={2} />);
    const input = wrapper.find('[data-select-input-search]').at(0)

    typing(input, 'a', () => {
      typing(input, '', () => {
        expect(wrapper.find('[data-select-value-label]').length).to.equal(1);
        typing(input, '', {keyCode: KEY_BACKSPACE}, () => {
          expect(wrapper.find('[data-select-value-label]').length).to.equal(0);
          expect(wrapper.find('[data-select-placeholder]').length).to.equal(1);
          expect(onInputClearSpy).to.have.property('callCount', 1);
          expect(wrapper.find('[data-select-menu-outer]').length).to.equal(0);
          done()
        })
      });
    });
  })

  it('should open outer menu when KEY_DOWN is pressed', (done) => {
    const onOpenSpy = sinon.spy()
    const wrapper = mount(<Select onOpen={onOpenSpy} options={options} value={2} />);
    const input = wrapper.find('[data-select-input-search]').at(0)
    typing(input, '', {keyCode: KEY_DOWN}, () => {
      expect(wrapper.find('[data-select-menu-outer]').length).to.equal(1);
      done()
    });
  });

  it('should render a custom value renderer', () => {
    const valueRenderer = () => {
      return (<div className="my-value" />);
    }

    const wrapper = mount(
      <Select options={options} valueRenderer={valueRenderer} />
    );

    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    wrapper.find('[data-select-option]').at(0).simulate('mouseDown');
    expect(wrapper.find('.my-value')).to.have.property('length', 1);
  })

  it('should render a custom option renderer', () => {
    const optionRenderer = (opt, index) => {
      return (<div className="my-option" key={index} />);
    }

    const wrapper = mount(
      <Select options={options} optionRenderer={optionRenderer} />
    );

    wrapper.find('[data-select-control]').at(0).simulate('mouseDown');
    expect(wrapper.find('.my-option')).to.have.property('length', 2);
  })
});
