#!/usr/bin/env node
const variables = require('../src/Select/cssVariables');
const variablesList = Object.keys(variables)

variablesList.sort()

let aux = null
variablesList.forEach((varname) => {
  const splitted = varname.split('__')
  let firstletter = splitted[1].substr(0,1)
  let suffix = `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/${splitted[1]}">${splitted[1]}</a>`
  let splited = splitted[1].split('--')
  if (splited.length > 1) {
    suffix = `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/${splited[0]}">${splited[0]}</a>--<b>${splited[1]}</b>`
  }

  if (aux != null && aux != splitted[0]) {
      console.log('')
  }

  console.log(`--styled-<b>${splitted[0]}</b>__${suffix}: ${variables[varname]};`);


  aux = splitted[0]
});
