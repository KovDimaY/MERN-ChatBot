import React from 'react';

import EmptyView from '../../Common/EmptyView';

const Home = () => {
  const renderDescription = () => (
    <React.Fragment>
      <p>
        Welcome to my new personal project!!!
      </p>

      <p>
        Ask questions as you are speaking to me and try to populate
        the website with the info he will provide.
      </p>

      <p>
        Every page will have a progress bar which indicates
        how much info you have already recovered - so you will know
        where to stop asking about some particular topic.
      </p>

      <p>
        One more time, this project was created to learn about Chatbots
        and to practice my full stack skills. I am happy at my current job and
        I am not looking for a change.
      </p>
    </React.Fragment>
  );

  return (
    <div className="home-page-container">
      <EmptyView section="home">{renderDescription()}</EmptyView>
    </div>
  );
};

export default Home;
