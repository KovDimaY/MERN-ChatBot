const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const { mongoURI } = require('./config/keys');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true });

app.use(bodyParser.json());

routes(app);

if (process.env.NODE_ENV === 'production') {
  app.use('/docs/storybook', express.static('client/storybook-static'));
  app.use('/docs/styleguide', express.static('client/styleguide'));
  app.use(express.static('client/build'));

  app.get('/docs/storybook', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'storybook-static', 'index.html'));
  });

  app.get('/docs/styleguide', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'styleguide', 'index.html'));
  });

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.info(`Server is running on the port ${PORT}`); // eslint-disable-line no-console
});
