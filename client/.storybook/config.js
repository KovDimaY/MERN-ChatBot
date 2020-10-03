import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'materialize-css/dist/css/materialize.min.css';
import '../public/css/styles.css';
import '../public/css/icons.css';

const requireAll = require.context('../src', true, /story\.js$/);

function loadStories() {
  requireAll.keys().forEach(requireAll);
}

addDecorator(withInfo);
configure(loadStories, module);
addParameters({ viewport: {} });
