export const DOM = {
  get root() {
    return select("#root");
  },
  get themeToggleButton() {
    return select("header #theme-toggle");
  },
  get content() {
    return select("#content");
  },
};

function select(selectors) {
  const element = document.querySelector(selectors);

  if (!element) {
    throw new Error(`Element ${selectors} not found.`);
  }

  return element;
}
