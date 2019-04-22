import { configure } from '@storybook/react';
import 'materialize-css/dist/css/materialize.min.css';

const requireAll = require.context('../src', true, /story\.js$/);

function loadStories() {
  requireAll.keys().forEach(requireAll)
}

configure(loadStories, module);
