#!/usr/bin/env node
const variables = require('../src/Select/cssVariables');

Object.keys(variables).forEach((varname) => {
  const splitted = varname.split('__')
  console.log(`--styled-<b>${splitted[0]}</b>__${splitted[1]}: ${variables[varname]};`);
});
