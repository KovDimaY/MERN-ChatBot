const { getRandomElement } = require('../utils/helpers');
const { experiences } = require('./experience');
const { educations } = require('./education');
const { projects } = require('./projects');

const fallbackPhrases = [
  'Are you sure you want to ask me about this?',
  'Ok, do you have another question?',
  'A will not answer this question, next one?',
  'This is not a good question to ask...',
];

const noInfoPhrases = [
  'I do not remember Dima telling me about this...',
  'Probably this information is not available...',
  'I do not have information about that',
  'You can ask Dima in person about it...',
];

const getResponse = category => (element, field) => {
  if (category && element && field) {
    const categories = {
      experiences,
      educations,
      projects,
    };

    const answers = categories[category][element][field];

    return answers
      ? getRandomElement(answers)
      : getRandomElement(noInfoPhrases);
  }

  return getRandomElement(fallbackPhrases);
};

module.exports = {
  getResponse,
};
