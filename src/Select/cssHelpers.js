import variables from './cssVariables';

export const autoCssGenerator = function AutoCssGenerator(prefix) {
  return function (property, pseudoClass) {
    const suffix = pseudoClass ? `--${pseudoClass}` : '';
    const varname = `${prefix}__${property}${suffix}`;
    return `
      ${property}: ${variables[varname]};
      ${property}: var(--styled-${varname}, ${variables[varname]});
    `;
  };
}

export const cssVar = function CSSVar(prefix) {
  return function (property, pseudoClass) {
    const suffix = pseudoClass ? `--${pseudoClass}` : '';
    const varname = `${prefix}__${property}${suffix}`;
    return variables[varname];
  };
}

export const globalCssVar = function GlobalCSSVar(property, pseudoClass) {
  const suffix = pseudoClass ? `--${pseudoClass}` : '';
  return variables[`select__${property}${suffix}`];
}
