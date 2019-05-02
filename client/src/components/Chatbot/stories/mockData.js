export const textMessages = [
  {
    author: 'bot',
    id: '83ea8533-27d1-4c25-8093-3912455355b8',
    msg: 'Hello! How can I help you?',
    type: 'text',
  },
  {
    author: 'user',
    id: 'aa763b2d-2248-4c2d-bf52-5c1ea0567e36',
    msg: 'Hello! Nice to meet you! How are you?',
    type: 'text',
  },
  {
    author: 'bot',
    id: 'b559ab29-df29-4543-9f6a-b1297f336cff',
    msg: 'I am fine too, thank you!',
    type: 'text',
  },
];

export const quickRepliesMessages = [
  {
    author: 'bot',
    id: '08d9472c-b561-47a8-8e3f-f888d816ef8f',
    msg: 'Hello, you have visited Feedback page.',
    type: 'text',
  },
  {
    author: 'bot',
    id: '3725e67a-2ffd-448b-b4f3-71985f4b13f0',
    type: 'payload',
    msg: {
      message: 'Would you be so kind to leave a feedback, please?',
      type: 'quick-replies',
      values: [
        {
          id: 'page-visited-feedback-id-1',
          text: 'Yes',
          type: 'text',
          value: 'Yes, sure',
        },
        {
          id: 'page-visited-feedback-id-2',
          text: 'Later',
          type: 'text',
          value: 'Maybe later',
        },
        {
          id: 'page-visited-feedback-id-3',
          text: 'Star',
          type: 'link',
          value: 'https://github.com/KovDimaY/MERN-ChatBot',
        },
      ],
    },
  },
];

export const cardsMessages = [
  {
    author: 'bot',
    id: '83ea8533-27d1-4c25-8093-3912455355b8',
    msg: 'Hello! How can I help you?',
    type: 'text',
  },
  {
    author: 'user',
    id: 'aa763b2d-2248-4c2d-bf52-5c1ea0567e36',
    msg: 'Hi! Tell me about your projects',
    type: 'text',
  },
  {
    author: 'bot',
    id: '3725e67a-2ffd-448b-b4f3-71985f4b13f0',
    type: 'payload',
    msg: {
      message: 'I have many different projects, but these ones I am the most proud of:',
      type: 'cards',
      value: [
        {
          id: 1,
          title: 'TripReviewer',
          image: 'https://user-images.githubusercontent.com/26466644/47854355-d4100580-dde1-11e8-8a1e-f52084168b82.png',
          description: 'This is a simple blog about traveling written with MERN stack, using JWT and Firebase.',
          link: 'https://github.com/KovDimaY/Trip-Reviewer',
        },
        {
          id: 2,
          title: 'SimpleChat',
          image: 'https://user-images.githubusercontent.com/26466644/46696500-91a83e00-cc12-11e8-9574-8e73ed0588d9.png',
          description: 'This is a simple chat with a support of different rooms written with NodeJS and Socket.IO.',
          link: 'https://github.com/KovDimaY/SimpleChat-Socket.io',
        },
        {
          id: 3,
          title: 'React-Highcharts Playground',
          image: 'https://user-images.githubusercontent.com/26466644/31556335-e6b3d980-b044-11e7-8707-249399c11a3d.png',
          description: 'A project to learn and practice React.js and to integrate Highcharts as react components.',
          link: 'https://github.com/KovDimaY/React-Highcharts',
        },
        {
          id: 4,
          title: 'Memory Game',
          image: 'https://user-images.githubusercontent.com/26466644/38465018-135d6174-3b17-11e8-851e-109c2e65e14f.png',
          description: 'A classical Memory Game created with pure Javascript and Local Storage usage.',
          link: 'https://github.com/KovDimaY/Memory-Game',
        },
        {
          id: 5,
          title: 'KovDimaY',
          image: 'https://user-images.githubusercontent.com/26466644/56865042-d5557000-69c9-11e9-9c29-4d9afad40c6d.png',
          description: 'A project to practice my skills in programming and game design, and also to satisfy my passion to create.',
          link: 'http://kovalenkody.wixsite.com/kovdimay',
        },
      ],
    },
  },
];
