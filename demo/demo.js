import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render((
  <div>
    <div style={{width: '300px'}}>
      <h2>Multi Select</h2>
      <SelectShadow
        multi
        value={['one', 'two']}
        options={options}
      />
    </div>
    <div style={{width: '300px'}}>
      <h2>With Shadow DOM</h2>
      <SelectShadow
        name="theme"
        options={options}
      />
    </div>
    <div style={{width: '300px'}}>
      <h2>default</h2>
      <Select
        name="form-field-name"
        options={options}
      />
    </div>
    <div style={{width: '300px'}} className="select-theme-1">
      <h2>theme 1</h2>
      <Select
        name="form-field-name"
        options={options}
      />
    </div>
    <div style={{width: '300px'}} className="select-theme-2">
      <h2>theme 2</h2>
      <Select
        name="theme"
        options={options}
      />
    </div>
    <h2>CSS example</h2>
    <pre style={{color: 'grey', border: '2px solid #ccc', padding: '5px'}}>
    {`
    :root {
      // change CSS root scope
      --styled-select-border-style: solid;
    }

    .select-theme-1 {
      --styled-select-background-color: black;
      --styled-select-border-width: 3px;
      --styled-select-control-border-color: red;
    }

    .select-theme-2 {
      --styled-select-background-color: red;
      --styled-select-border-width: 1px;
      --styled-select-control-border-color: black;
    }`}
    </pre>

  </div>
), document.getElementById('main'));
