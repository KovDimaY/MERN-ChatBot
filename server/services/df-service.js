const dialogflow = require('dialogflow');
const structjson = require('../utils/stuctjson');
const {
  googleProjectID, dialogFlowSessionID, dialogFlowSessionLanguageCode,
  googleClientEmail, googlePrivateKey,
} = require('../config/keys');

const { Feedback } = require('../models/Feedback');

const projectID = googleProjectID;
const credentials = {
  client_email: googleClientEmail,
  private_key: googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({ projectID, credentials });

module.exports = {
  textQuery: async (query, userID, params = {}) => {
    const self = module.exports;
    const sessionPath = sessionClient.sessionPath(googleProjectID, dialogFlowSessionID + userID);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: dialogFlowSessionLanguageCode,
        },
      },
      queryParams: {
        payload: {
          data: params,
        },
      },
    };

    const result = await self.handleRequest(request);

    return result;
  },
  eventQuery: async (event, userID, params = {}) => {
    const self = module.exports;
    const sessionPath = sessionClient.sessionPath(googleProjectID, dialogFlowSessionID + userID);
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(params),
          languageCode: dialogFlowSessionLanguageCode,
        },
      },
    };

    const result = await self.handleRequest(request);

    return result;
  },
  handleRequest: async (request) => {
    const self = module.exports;

    try {
      const responses = await sessionClient.detectIntent(request);
      const result = responses[0].queryResult;

      switch (result.action) {
        case 'page-visited-feedback-yes': {
          if (result.allRequiredParamsPresent) {
            self.saveToDatabase(result.parameters.fields);
          }
          break;
        }
        default:
          break;
      }

      return result;
    } catch (error) {
      return error;
    }
  },
  saveToDatabase: async (data) => {
    const feedback = new Feedback({
      name: data.name.stringValue,
      feedback: data.feedback.stringValue,
      date: new Date(),
    });

    try {
      feedback.save();
    } catch (error) {
      console.error(error);
    }
  },
};
