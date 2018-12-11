const { WebhookClient } = require('dialogflow-fulfillment');
const dfService = require('../services/df-service');

const { Demand } = require('../models/Demand');

module.exports = (app) => {
  app.post('/api/df/textQuery', async (req, res) => {
    const result = await dfService.textQuery(req.body.query, req.body.params);

    res.send(result);
  });

  app.post('/api/df/eventQuery', async (req, res) => {
    const result = await dfService.eventQuery(req.body.query, req.body.params);

    res.send(result);
  });

  app.post('/api/df/fullfilment', async (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });
    const intentMap = new Map();

    const fallback = (agentItem) => {
      agentItem.add('I did not understand CUSTOM!!!');
      agentItem.add('Repeat CUSTOM!!!');
    };

    const saveDemand = (agentItem) => {
      Demand.findOne({ param: agentItem.parameters['experience-companies'] }, (err, company) => {
        if (company != null) {
          company.counter += 1;
          company.save();
        } else {
          const newDemand = new Demand({ param: agentItem.parameters['experience-companies'] });
          newDemand.save();
        }
      });

      const response = `You were looking for ${agentItem.parameters['experience-companies']}`;
      agentItem.add(response);
    };

    intentMap.set('describe-company', saveDemand);
    intentMap.set('Default Fallback Intent', fallback);

    agent.handleRequest(intentMap);
  });
};
