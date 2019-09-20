const { saveDemand } = require('../utils/helpers');

const { getResponse } = require('../fullfilments');

const handleExperienceFullfilment = item => (agentItem) => {
  const companyName = agentItem.parameters['experience-companies'];
  const response = getResponse('experiences')(companyName, item);

  saveDemand(companyName);
  agentItem.add(response);
};

const handleEducationFullfilment = item => (agentItem) => {
  const companyName = agentItem.parameters['education-degree'];
  const response = getResponse('educations')(companyName, item);

  saveDemand(companyName);
  agentItem.add(response);
};

module.exports = {
  handleExperienceFullfilment,
  handleEducationFullfilment,
};
