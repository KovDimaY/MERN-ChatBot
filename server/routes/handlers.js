const { saveDemand } = require('../utils/helpers');

const { getResponse } = require('../fullfilments');

const handleExperienceFullfilment = item => (agentItem) => {
  const companyName = agentItem.parameters['experience-companies'];
  const response = getResponse('experiences')(companyName, item);

  saveDemand(companyName);
  agentItem.add(response);
};

module.exports = {
  handleExperienceFullfilment,
};
