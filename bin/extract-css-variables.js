#!/usr/bin/env node
const variables = require('../src/Select/cssVariables');

Object.keys(variables).forEach((varname) => {
  const splitted = varname.split('__')
  let suffix = `<a href="https://css-tricks.com/almanac/properties/f/${splitted[1]}>${splitted[1]}</a>`
  let splited = suffix.split('--')
  if (splited.length > 1) {
    suffix = `<a href="https://css-tricks.com/almanac/properties/f/${splited[0]}">${splited[0]}</a>--<b>${splited[1]}</b>`
  }

  console.log(`--styled-<b>${splitted[0]}</b>__${suffix}: ${variables[varname]};`);
});
