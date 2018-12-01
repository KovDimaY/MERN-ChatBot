const dfService = require('../services/df-service');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ it: 'works' });
  });

  app.post('/api/df/textQuery', async (req, res) => {
    const result = await dfService.textQuery(req.body.query, req.body.params);

    res.send(result);
  });

  app.post('/api/df/eventQuery', async (req, res) => {
    const result = await dfService.eventQuery(req.body.query, req.body.params);

    res.send(result);
  });
};
