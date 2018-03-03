import variables from '../src/Select/cssVariables'
const variablesList = Object.keys(variables)

variablesList.sort()

export default () => {
  let aux = null
  let textCss = ''
  variablesList.forEach((varname) => {
    const splitted = varname.split('__')
    let firstletter = splitted[1].substr(0,1)
    let suffix = `${splitted[1]}`
    let splited = splitted[1].split('--')
    if (splited.length > 1) {
      suffix = `<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/${splited[0]}">${splited[0]}</a>--<b>${splited[1]}</b>`
    }

    if (aux != null && aux != splitted[0]) {
        textCss += '\n'
    }

    textCss += `  --styled-${varname}: ${variables[varname]};\n`

    aux = splitted[0]
  });
  return textCss
}
