const fs = require('fs');
const path = require('path');
const schema = require('./components.json');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({ name, subfolders, components }) => ({
    name,
    components() {
      return components.map(componentName => (
        resolve(
          `src/components${subfolders || ''}`,
          componentName,
          'index.js',
        )));
    },
  }));
}

module.exports = {
  title: 'MERN-Chatbot Components',
  serverPort: 4000,
  editorConfig: {
    theme: 'dracula',
  },
  require: [
    resolve('node_modules/materialize-css/dist/css/materialize.min.css'),
    resolve('public/css/styles.css'),
    resolve('public/css/icons.css'),
    resolve('styleguide/reset-styles.css'),
  ],
  sections: getSections(),
};
