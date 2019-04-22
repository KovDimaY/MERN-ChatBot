export const data = [
  {
    type: 'text',
    author: 'bot',
    msg: 'This is a text message from the bot',
    value: 'Value for "This is a text message from the bot"',
  },
  {
    type: 'text',
    author: 'user',
    msg: 'This is a text message from the user',
    value: 'Value for "This is a text message from the user"',
  },
  {
    type: 'payload',
    author: 'bot',
    msg: {
      type: 'cards',
      value: [
        {
          title: 'First card',
          image: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
          description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer id ante odio.
          `,
          link: 'https://www.telegraph.co.uk/technology/news/11048695/Monkeys-ghosts-and-gods-cannot-own-copyright-says-US.html',
        },
        {
          title: 'Second card',
          image: 'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cc_BE6RJF_16x9.jpg',
          description: `
            Morbi vulputate felis ut risus convallis consectetur.
            Pellentesque non leo ligula.
          `,
          link: 'https://www.sciencemag.org/news/2017/02/monkeys-master-key-sign-self-awareness-recognizing-their-reflections',
        },
        {
          title: 'Third card',
          image: 'https://cdn.images.express.co.uk/img/dynamic/1/590x/ghost-696974.jpg',
          description: `
            Phasellus pellentesque nisi eu ex tempor sodales.
            In molestie suscipit magna, lobortis venenatis purus
            dignissim non.
          `,
          link: 'https://www.express.co.uk/news/uk/696974/Ghost-rude-monkey-shocks-visitors-stately-home-Dorset',
        },
      ],
    },
    value: 'A value for another text',
  },
  {
    type: 'payload',
    author: 'bot',
    msg: {
      type: 'quick-replies',
      values: [
        {
          type: 'link',
          text: 'This is a link',
          value: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg',
        },
        {
          type: 'text',
          text: 'This is a text',
          value: 'A value for text',
        },
        {
          type: 'text',
          text: 'Another text',
          value: 'A value for another text',
        },
        {
          type: 'trigger',
          text: 'This is a trigger',
          value: 'A value for trigger',
        },
      ],
    },
    value: 'A value for another text',
  },
  {
    type: 'error',
    author: 'bot',
    msg: 'This is an error message from the bot',
    value: 'Value for "This is an error message from the bot"',
  },
];
