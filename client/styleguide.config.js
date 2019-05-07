const fs = require('fs');
const path = require('path');
const schema = require('./components.json');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({ name, content, components }) => ({
    name,
    content: content ? resolve('docs', `${content}.md`) : null,
    components() {
      return components.map(componentName => (
        resolve(
          'src/components',
          componentName,
          'index.js',
        )));
    },
  }));
}

module.exports = {
  title: 'MERN-Chatbot Components',
  serverPort: 4321,
  editorConfig: {
    theme: 'dracula',
  },
  require: [
    resolve('node_modules/materialize-css/dist/css/materialize.min.css'),
    resolve('public/css/styles.css'),
    resolve('public/css/icons.css'),
  ],
  sections: getSections(),
};
