import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Select from './Select'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'tree', label: 'Tree' },
]

storiesOf('Select', module)
  .add('default', () => (
    <div style={{width: '300px'}}>
      <Select
        name="form-field-name"
        options={options}
        onOpen={action('onOpen')}
        onChange={action('onChange')}
        onInputClear={action('onInputClear')}
        onValueClick={action('onValueClick')}
      />
    </div>
  ))
