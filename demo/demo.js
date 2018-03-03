import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import extractVariables from './extractVariables'

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/css';
import 'brace/theme/github';

import Select from '../lib'
import SelectShadow from '../lib/Select/ShadowDOM'

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'tree', label: 'Tree' },
  { value: 'four', label: 'Four' },
  { value: 'five', label: 'Five' },
  { value: 'six', label: 'Six' },
  { value: 'seven', label: 'Seven' },
]

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Col = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
`

const InputField = styled.input`
  padding: 5px;
  margin-left: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #ccc;
`

function onChange(newValue) {
  const css = newValue
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}

class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shadow: false,
      clearable: true,
      searchable: true,
      multi: true,
      noResultsText: "No results found",
      placeholder: "Select..."
    }
  }

  render() {
    return (
      <div>
      <h1>Demo Editor</h1>
      <h2>Default Theme</h2>
      <Container>
        <Col className="app-col-left" style={{width: '650px'}}>
          <AceEditor
            width="650px"
            ref={(node) => node && node.editor.session.setUseWorker(false)}
            mode="css"
            theme="github"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            value={`:root {\n${extractVariables()}}`}
            defaultValue={`:root {\n${extractVariables()}}`}
            editorProps={{$blockScrolling: true}}
            />
        </Col>
        <Col className="app-col-right"  style={{width: '400px'}}>
          <div style={{padding: '50px 0px', backgroundColor: '#e6f2de'}}>
            <SelectShadow
              style={{margin: '20px'}}
              name="theme"
              value={['one', 'two']}
              {...this.state}
              options={options}
            />
          </div>
          <OptionContainer>
            <label>Multi: </label>
            <input
              type="checkbox"
              checked={this.state.multi}
              onChange={(n) => this.setState({ multi: n.target.checked   })} />
          </OptionContainer>
          <OptionContainer>
            <label>Searchable: </label>
            <input
              type="checkbox"
              checked={this.state.searchable}
              onChange={(n) => this.setState({ searchable: n.target.checked   })} />
          </OptionContainer>
          <OptionContainer>
            <label>Clearable: </label>
            <input
              type="checkbox"
              checked={this.state.clearable}
              onChange={(n) => this.setState({ clearable: n.target.checked   })} />
          </OptionContainer>
          <OptionContainer>
            <label>Placeholder: </label>
            <InputField
              type="text"
              defaultValue={this.state.placeholder}
              onChange={(n) => this.setState({ placeholder: n.target.value   })} />
          </OptionContainer>
          <OptionContainer>
            <label>NoResultsText: </label>
            <InputField
              type="text"
              defaultValue={this.state.noResultsText}
              onChange={(n) => this.setState({ noResultsText: n.target.value   })} />
          </OptionContainer>
        </Col>
      </Container>
      </div>
    )
  }
}

ReactDOM.render((<App />), document.getElementById('main'))
