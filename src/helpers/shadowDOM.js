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
      const style = document.querySelector(`[data-styled-components*=${classNameID}]`);
      if (!style) return;
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
