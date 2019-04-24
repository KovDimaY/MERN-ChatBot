import { configure, addParameters } from '@storybook/react';
import 'materialize-css/dist/css/materialize.min.css';
import '../public/css/styles.css';
import '../public/css/icons.css';

const requireAll = require.context('../src', true, /story\.js$/);

function loadStories() {
  requireAll.keys().forEach(requireAll)
}

configure(loadStories, module);
addParameters({ viewport: options });
