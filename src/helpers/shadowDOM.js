require('../polyfill')

import React from 'react'
import ShadowDOM from 'react-shadow'

export default (element) => {

  return class ShadowDOMHelper extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        stylesheet: false
      }
    }

    applyStylesheet = (classNameID) => {
      let style = document.querySelector('style[data-styled]');

      if (!style) {
        style = document.querySelector(`style[data-styled-components*=${classNameID.split(' ')[1]}]`);
      }

      if (!style) return;

      try {
        this.styleTag.innerHTML = '';
      } catch(e) {}
      this.styleTag.appendChild(style.cloneNode(true));
    }

    render() {
      const { stylesheet } = this.state
      return (
        <ShadowDOM>
          <span>
            <span ref={(n) => this.styleTag = n} />
            {React.createElement(element, {...this.props, generatedClassName: this.applyStylesheet})}
          </span>
        </ShadowDOM>
      )
    }
  }
}
