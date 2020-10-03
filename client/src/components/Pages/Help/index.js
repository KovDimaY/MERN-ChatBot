import React from 'react';
import { Link } from 'react-router-dom';

import { STORYBOOK, STYLEGUIDE, NOT_FOUND } from 'constants/routes';
import { questions } from './questions';

import './styles.css';

const HelpPage = () => {
  const renderQuestions = items =>
    items.map(question => (
      <li key={question} className="question-item">
        {question}
      </li>
    ));

  const renderSections = sections =>
    sections.map(section => (
      <li key={section.title}>
        <span className="section-title">{section.title}</span>
        <ul className="questions-wrapper">
          {renderQuestions(section.questions)}
        </ul>
      </li>
    ));

  const renderLinks = () => (
    <ul className="shortcut-links-wrapper">
      <li>
        <a
          className="waves-effect waves-light btn-large light-blue lighten-1"
          href={STORYBOOK}
        >
          <i className="material-icons left">book</i>
          Storybook
        </a>
      </li>
      <li>
        <a
          className="waves-effect waves-light btn-large purple lighten-1"
          href={STYLEGUIDE}
        >
          <i className="material-icons left">widgets</i>
          Styleguidist
        </a>
      </li>
      <li>
        <Link
          className="waves-effect waves-light btn-large teal lighten-1"
          to={NOT_FOUND}
        >
          <i className="material-icons left">location_off</i>
          404 page
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="help-page-container">
      <h3 className="help-section-title">Help</h3>
      <p className="text">
        As this is a learning project, I want you to access easily to all the
        hidden places of the project, even if normally users should not access
        them. In my case, they are: 404 page and documentations in Sorybook and
        Styleguidist. This is something internal but maybe someone of you will
        want to check these pages too, so here you have the links:
      </p>
      {renderLinks()}
      <p className="text">
        Also, if you are completely stuck and you have no idea what question to
        ask in order to open some data you want to get - here you can see the
        list of examples for all the questions that you need to open 100% of the
        information on all the pages. As you can see, it is pretty
        straightforward and simple to open all the data and you do not need to
        ask a lot.
      </p>
      <p className="text">
        Notice, that these questions are only examples and you do not have to
        ask exactly the same questions. My bot should understand many different
        ways of asking about these topics. So you are welcome try different
        variations to see how flexible it is. And if you are lazy and you do not
        want to play with the bot - here you can find a link to my{' '}
        <a
          href="https://www.linkedin.com/in/kovalenkodmytro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        profile and see everything at once.
      </p>
      <p className="text">
        Remember, <b>your feedback is very important</b> to me! If you see that
        my bot answers in a weird way to a simple question, or if you think that
        something can be improved in a visual, user experience or architectural
        way - please, reach me aut and share your opinion! I will appreciate a
        lot your time and effort to make my project better! Thank you in
        advance! :D
      </p>
      <h4 className="help-section-subtitle">Examples of questions:</h4>
      <ul className="sections-wrapper">{renderSections(questions)}</ul>
    </div>
  );
};

export default HelpPage;
