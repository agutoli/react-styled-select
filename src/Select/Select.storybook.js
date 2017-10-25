import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Select from './'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'tree', label: 'Tree' },
  { value: 'four', label: 'Four' },
  { value: 'five', label: 'Five' },
  { value: 'six', label: 'Six' },
  { value: 'seven', label: 'Seven' },
]

var getOptions = function(input, callback) {
  setTimeout(function() {
    callback(null, {
      options: [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ],
      // CAREFUL! Only set this to true when there are no more options,
      // or more specific queries will not be sent to the server.
      complete: true
    });
  }, 500);
};

storiesOf('Select', module)
  .add('default', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM
          name="form-field-name"
          options={options}
          onOpen={action('onOpen')}
          onChange={action('onChange')}
          onInputClear={action('onInputClear')}
          onValueClick={action('onValueClick')}
        />
      </div>
    </div>
  ))
  .add('no results', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM
          className="secondary"
          name="form-field-name"
          options={[]}
          onOpen={action('onOpen')}
          onChange={action('onChange')}
          onInputClear={action('onInputClear')}
          onValueClick={action('onValueClick')}
        />
      </div>
    </div>
  ))
  .add('valueRenderer', () => {
    const customValueRenderer = (option) => {
      return (
        <span>{option.value} - {option.label}</span>
      );
    }
    return (
      <div style={{display: 'flex', margin: '20px'}}>
        <div style={{width: '300px'}}>
          <Select.ShadowDOM
            className="secondary"
            name="form-field-name"
            options={options}
            valueRenderer={customValueRenderer}
          />
        </div>
      </div>
    )
  })
  .add('optionRenderer', () => {
    const customOptionRenderer = (option) => {
      return (
        <li onMouseDown={option.onMouseDown}
          style={{border: '1px solid red'}}>Custom Item: {option.label}</li>
      );
    }
    return (
      <div style={{display: 'flex', margin: '20px'}}>
        <div style={{width: '300px'}}>
          <Select.ShadowDOM
            options={options}
            optionRenderer={customOptionRenderer}
          />
        </div>
      </div>
    )
  })
  .add('No searchable', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM
          searchable={false}
          options={options}
        />
      </div>
    </div>
  ))
  .add('clearable=true', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM
          clearable
          options={options}
        />
      </div>
    </div>
  ))
  .add('multi=true', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM
          multi
          value={['one', 'four']}
          options={options}
          onChange={action('onChange')}
        />
      </div>
      <div className="secondary" style={{width: '300px'}}>
        <Select.ShadowDOM
          multi
          value={['one', 'four']}
          options={options}
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
  .add('async', () => (
    <div style={{display: 'flex', margin: '20px'}}>
      <div style={{width: '300px'}}>
        <Select.ShadowDOM.Async
          loadOptions={getOptions}
          onChange={action('onChange')}
        />
      </div>
    </div>
  ))
