#!/usr/bin/env node
const variables = require('../src/Select/cssVariables');

Object.keys(variables).forEach((varname) => {
  const splitted = varname.split('__')
  let suffix = splitted[1]
  let splited = suffix.split('--')
  if (splited.length > 1) {
    suffix = `${splited[0]}--<b>${splited[1]}</b>`
  }

  console.log(`--styled-<b>${splitted[0]}</b>__${suffix}: ${variables[varname]};`);
});
