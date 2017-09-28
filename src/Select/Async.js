import React from 'react'
import PropTypes from 'prop-types'

class SelectAsync extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      options: props.options
    }
  }

  loadOptions = (term) => {
    const { loadOptions } = this.props

    const callback = (error, data) => {
      const options = data && data.options || [];
      if (callback === this._callback) {
				this._callback = null;
				this.setState({
					isLoading: false,
					options
				});
			}
    }

    this._callback = callback

    const promise = loadOptions(term, callback);

    if (promise) {
			promise.then(
				(data) => callback(null, data),
				(error) => callback(error)
			);
		}

		if ( this._callback && !this.state.isLoading ) {
			this.setState({
				isLoading: true
			});
		}
  }

  render() {
    return React.cloneElement(this.props.children, Object.assign({}, this.props, {
      options: this.state.options,
      onTyping: this.loadOptions
    }))
    // (
    //
    //   <Select
    //     {...this.props}
    //     options={this.state.options}
    //     onTyping={this.loadOptions} />
    // )
  }
}

SelectAsync.propTypes = {
  autoload: PropTypes.bool.isRequired,
  ignoreAccents: PropTypes.bool,
  ignoreCase: PropTypes.bool,
  loadOptions: PropTypes.func.isRequired
}

SelectAsync.defaultProps = {
  loadOptions: () => {}
}

export default SelectAsync
