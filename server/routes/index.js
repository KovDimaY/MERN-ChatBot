const { WebhookClient } = require('dialogflow-fulfillment');

const dfService = require('../services/df-service');
const { Feedback } = require('../models/Feedback');
const {
  handleExperienceFullfilment,
  handleEducationFullfilment,
  handleProjectFullfilment,
} = require('./handlers');

module.exports = app => {
  app.post('/api/df/textQuery', async (req, res) => {
    const result = await dfService.textQuery(req.body.query, req.body.params);

    res.send(result);
  });

  app.post('/api/df/eventQuery', async (req, res) => {
    const result = await dfService.eventQuery(req.body.query, req.body.params);

    res.send(result);
  });

  app.get('/api/feedbacks', (req, res) => {
    Feedback.find({}, (err, document) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send(document);
    });
  });

  app.post('/api/df/fullfilment', async (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });
    const intentMap = new Map();

    intentMap.set(
      'experience-position',
      handleExperienceFullfilment('position')
    );
    intentMap.set(
      'experience-duration',
      handleExperienceFullfilment('duration')
    );
    intentMap.set(
      'experience-description',
      handleExperienceFullfilment('description')
    );
    intentMap.set(
      'experience-technologies',
      handleExperienceFullfilment('technologies')
    );
    intentMap.set(
      'experience-responsibilities',
      handleExperienceFullfilment('responsibilities')
    );

    intentMap.set('education-time', handleEducationFullfilment('time'));
    intentMap.set('education-topic', handleEducationFullfilment('topic'));
    intentMap.set(
      'education-description',
      handleEducationFullfilment('description')
    );
    intentMap.set(
      'education-activities',
      handleEducationFullfilment('activities')
    );

    intentMap.set('projects-tools', handleProjectFullfilment('tools'));
    intentMap.set(
      'projects-description',
      handleProjectFullfilment('description')
    );

    agent.handleRequest(intentMap);
  });
};
