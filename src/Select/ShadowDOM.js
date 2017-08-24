if (process.env.NODE_ENV !== 'test') {
  require('@webcomponents/shadydom');
}

import Select from './Select'
import shadowDOM from '../helpers/shadowDOM'
export default shadowDOM(Select)
