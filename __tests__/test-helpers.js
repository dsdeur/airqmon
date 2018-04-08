const { shallow, mount } = require('enzyme');
const React = require('react');
const { ThemeProvider } = require('../src/styled-components');

function getContext(theme) {
  const context = shallow(React.createElement(ThemeProvider, { theme }))
    .instance()
    .getChildContext();

  return context;
}

function shallowWithTheme(tree, theme, options = {}) {
  const context = getContext(theme);

  return shallow(tree, {
    ...options,
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
}

function mountWithTheme(tree, theme, options = {}) {
  const context = getContext(theme);

  return mount(tree, {
    ...options,
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  });
}

module.exports = {
  shallowWithTheme,
  mountWithTheme,
};
