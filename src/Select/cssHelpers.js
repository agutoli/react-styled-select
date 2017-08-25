import variables from './cssVariables';

export const autoCssGenerator = (prefix) => {
  return (property, pseudoClass) => {
    const suffix = pseudoClass ? `--${pseudoClass}` : '';
    const varname = `${prefix}__${property}${suffix}`;
    return `
      ${property}: ${variables[varname]};
      ${property}: var(--styled-${varname}, ${variables[varname]});
    `;
  };
}

export const cssVar = (prefix) => {
  return (property, pseudoClass) => {
    const suffix = pseudoClass ? `--${pseudoClass}` : '';
    const varname = `${prefix}__${property}${suffix}`;
    return variables[varname];
  };
}

export const globalCssVar = (property, pseudoClass) => {
  const suffix = pseudoClass ? `--${pseudoClass}` : '';
  return variables[`select__${property}${suffix}`];
}
