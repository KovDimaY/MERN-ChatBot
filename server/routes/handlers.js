const { saveDemand } = require('../utils/helpers');
const { getResponse } = require('../fullfilments');

const handleExperienceFullfilment = item => agentItem => {
  const companyName = agentItem.parameters['experience-companies'];
  const response = getResponse('experiences')(companyName, item);

  saveDemand(companyName);
  agentItem.add(response);
};

const handleEducationFullfilment = item => agentItem => {
  const degreeName = agentItem.parameters['education-degree'];
  const response = getResponse('educations')(degreeName, item);

  agentItem.add(response);
};

const handleProjectFullfilment = item => agentItem => {
  const projectName = agentItem.parameters['projects-project'];
  const response = getResponse('projects')(projectName, item);

  saveDemand(projectName);
  agentItem.add(response);
};

module.exports = {
  handleExperienceFullfilment,
  handleEducationFullfilment,
  handleProjectFullfilment,
};
