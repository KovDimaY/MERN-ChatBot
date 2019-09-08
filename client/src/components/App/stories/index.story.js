import React from 'react';
import { storiesOf } from '@storybook/react';

import { marginSize, paddingSize } from 'constants/storybook';

const renderLink = (url, text) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

storiesOf('Welcome Story', module)
  .add('MERN Chatbot', () => (
    <div style={{ padding: paddingSize }}>
      <h4>MERN Chatbot Storybook</h4>

      <p>
        This is the UI documentation of components for my presonal project
        {' '}
        {renderLink('https://github.com/KovDimaY/MERN-ChatBot/issues', 'MERN Chatbot Storybook')}
      </p>

      <p style={{ marginTop: marginSize }}>
        I have connected many {renderLink('https://storybook.js.org/addons/', 'addons')} to
        the project, so you can enjoy all the variaty of the features like:
      </p>

      <ul style={{ paddingLeft: paddingSize }}>
        <li style={{ listStyleType: 'disc' }}>
          Watching the info about usage and props of the component
          ({renderLink('https://github.com/storybooks/storybook/tree/master/addons/info', 'addon-info')})
        </li>
        <li style={{ listStyleType: 'disc' }}>
          Watching logs of the actions and events of the component
          ({renderLink('https://github.com/storybooks/storybook/tree/master/addons/actions', 'addon-actions')})
        </li>
        <li style={{ listStyleType: 'disc' }}>
          Watching the source code of the story of the component
          ({renderLink('https://github.com/storybooks/storybook/tree/master/addons/storysource', 'addon-storysource')})
        </li>
        <li style={{ listStyleType: 'disc' }}>
          Changing the viewport to see how the component looks like on different devices
          ({renderLink('https://github.com/storybooks/storybook/tree/master/addons/viewport', 'addon-viewport')})
        </li>
        <li style={{ listStyleType: 'disc' }}>
          Changing values of the props to see how it changes the component
          ({renderLink('https://github.com/storybooks/storybook/tree/master/addons/knobs', 'addon-knobs')})
        </li>
      </ul>

      <p style={{ marginTop: marginSize }}>
        Components of this documentation are organized in the same way
        as they are organized in the file structure of the code.
      </p>

      <p style={{ marginTop: marginSize }}>
        In this documentation
        you will find <b>all the atomic visual components</b> that
        are used in the project.
        But I did not include complex composite components
        (like Pages) or operational components that exist to bring logic (like wrappers or HOCs)
        and do not have a clear visual representation.
      </p>

      <p style={{ marginTop: marginSize }}>
        Thanks in advance for your feedback! Hope you find this project useful and interesting.
      </p>

      <img
        src="https://timedotcom.files.wordpress.com/2015/09/monkey-selfie.jpg?quality=85"
        alt="happy monkey"
        style={{ maxWidth: '100%' }}
      />
    </div>
  ));
