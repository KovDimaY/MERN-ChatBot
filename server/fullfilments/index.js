const { getRandomElement } = require('../utils/helpers');

const { experiences } = require('./experience');

const fallbackPhrases = [
  'Sorry, but I think you should check your question and ask it corrected...',
  'Looks like something is wrong with your question, try to rephrase...',
  'Are you sure your question is correct? Can you try to rephrase?',
  'I am not sure I can answer this question... Is everything correct?',
];

const noInfoPhrases = [
  'Sorry, I do not remember Dima telling me about this...',
  'I do not know how to answer your question...',
  'I am not sure I know the answer...',
  'I think Dima did not tell me anything about this...',
];

const getResponse = category => (element, field) => {
  if (category && element && field) {
    const categories = {
      experiences,
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
