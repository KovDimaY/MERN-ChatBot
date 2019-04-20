import { configure } from '@storybook/react';

const requireAll = require.context('../src', true, /stories\.js$/);

function loadStories() {
  requireAll.keys().forEach(requireAll)
}

configure(loadStories, module);
