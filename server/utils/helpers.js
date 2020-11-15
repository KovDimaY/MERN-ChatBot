const { Demand } = require('../models/Demand');

const saveDemand = companyName => {
  Demand.findOne({ param: companyName }, (err, company) => {
    if (company) {
      company.counter += 1; // eslint-disable-line no-param-reassign
      company.save();
    } else {
      const newDemand = new Demand({ param: companyName });

      newDemand.save();
    }
  });
};

const getRandomElement = array =>
  array[Math.floor(Math.random() * array.length)];

module.exports = {
  saveDemand,
  getRandomElement,
};
