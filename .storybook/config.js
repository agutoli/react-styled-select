import { configure } from '@storybook/react';

import './index.css'

const requires = require.context('../src/', true, /storybook\.js$/);
const loadStories = () => requires.keys().forEach(requires);

configure(loadStories, module);
