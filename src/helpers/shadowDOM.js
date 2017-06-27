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

    applyStylesheet = (node) => {
      const { generatedClassName } = node.state
      const style = document.querySelector(`[data-styled-components*="${generatedClassName}"]`)
      if (!style) {
        return;
      }
      this.styleTag.innerHTML = style.innerHTML;
    }

    render() {
      const { stylesheet } = this.state
      return (
        <ShadowDOM>
          <span>
            <style ref={(n) => this.styleTag = n} />
            {React.createElement(element, {...this.props, ref: this.applyStylesheet})}
          </span>
        </ShadowDOM>
      )
    }
  }
}
