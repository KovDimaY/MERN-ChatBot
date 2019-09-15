const { saveDemand } = require('../utils/helpers');

const { experiences } = require('../../client/src/components/Pages/Experience/constants');


const handleExperiencePosition = (agentItem) => {
  const companyName = agentItem.parameters['experience-companies'];

  saveDemand(companyName);


  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!! this is a test", experiences);
  agentItem.add('OLOLO I AM FROM A FALLBACK');
};

module.exports = {
  handleExperiencePosition,
};
