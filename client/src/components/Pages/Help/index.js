import React from 'react';

import { questions } from './questions';

import './styles.css';

const HelpPage = () => {
  const renderQuestions = items => (
    items.map(question => (
      <li key={question} className="question-item">
        { question }
      </li>
    ))
  );

  const renderSections = sections => (
    sections.map(section => (
      <li key={section.title}>
        <span className="section-title">
          { section.title }
        </span>
        <ul className="questions-wrapper">
          { renderQuestions(section.questions) }
        </ul>
      </li>
    ))
  );

  return (
    <div className="help-page-container">
      <h3 className="help-section-title">Help</h3>
      <p className="text">
        If you are completely stuck and you have no idea what question
        to ask in order to open some data you want to get - here you can
        see the list of examples for all the questions that you need to
        open 100% of the information on all the pages. As you can see,
        it is pretty straightforward and simple to open all the data
        and you do not need to ask a lot.
      </p>
      <p className="text">
        Notice, that these questions are only examples and you do not
        have to ask exactly the same questions. My bot should understand
        many different ways of asking about these topics. So you are welcome
        try different variations to see how flexible it is.
      </p>
      <p>
        If you are lazy and you do not want to play with the bot - here
        you can find a link to
        my <a href="https://www.linkedin.com/in/kovalenkodmytro/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile
        and see everything at once.
      </p>
      <p className="text">
        Remember, <b>your feedback is very important</b> to me! If you see that
        my bot answers in a weird way to a simple question, or if you think
        that something can be improved in a visual, user experience or
        architectural way - please, reach me aut and share your opinion!
        I will appreciate a lot your time and effort to make my
        project better! Thank you in advance! :D
      </p>
      <h4 className="help-section-subtitle">Examples of questions:</h4>
      <ul className="sections-wrapper">
        { renderSections(questions) }
      </ul>
    </div>
  );
};

export default HelpPage;
