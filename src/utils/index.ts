export const findByTestAttribute = (component, attr) =>
  component.find(`[data-test='${attr}']`);
