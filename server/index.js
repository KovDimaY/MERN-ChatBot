const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ it: 'works' });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`); // eslint-disable-line no-console
});
