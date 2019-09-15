const { Demand } = require('../models/Demand');

const saveDemand = (companyName) => {
  Demand.findOne({ param: companyName }, (err, company) => {
    if (company != null) {
      company.counter += 1; // eslint-disable-line no-param-reassign
      company.save();
    } else {
      const newDemand = new Demand({ param: companyName });
      newDemand.save();
    }
  });
};

module.exports = {
  saveDemand,
};
