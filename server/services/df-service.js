const dialogflow = require('dialogflow');
const structjson = require('../utils/stuctjson');
const {
  googleProjectID, dialogFlowSessionID, dialogFlowSessionLanguageCode,
  googleClientEmail, googlePrivateKey,
} = require('../config/keys');

const projectID = googleProjectID;
const credentials = {
  client_email: googleClientEmail,
  private_key: googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient({ projectID, credentials });
const sessionPath = sessionClient.sessionPath(googleProjectID, dialogFlowSessionID);

module.exports = {
  textQuery: async (query, params = {}) => {
    const self = module.exports;
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
  eventQuery: async (event, params = {}) => {
    const self = module.exports;
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
    try {
      const responces = await sessionClient.detectIntent(request);
      const result = responces[0].queryResult;

      return result;
    } catch (error) {
      return error;
    }
  },
};
