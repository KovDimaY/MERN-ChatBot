const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`); // eslint-disable-line no-console
});
