import {
  projectMemoryGame,
  projectKovdimay,
  projectReactHighcharts,
  projectSimpleChat,
  projectTravelStories,
} from 'images';

export const projects = [
  {
    id: 4,
    name: 'TripReviewer',
    nameInStore: 'trips',
    description: `
    This is a simple blog about traveling written with MERN stack.
    The purpose of the project is to learn and practice a full
    stack creation of the app! This is my first project where I
    implemented a custom authentication system, mongo CRUD, configured
    a CI with linting and 100% client-side test coverage. As in my
    previous projects, I used a very strict git flow, detailed
    documentation of the development, versioning and descriptive
    releases, automated Kanban projects and issues to organize the process.
    Also, this project has two environments (PROD and PRE) for
    testing and integration purposes. I realize that this project
    is not yet perfect but it is the most professional project I have
    implemented for the moment (from both code and organization perspective).
  `,
    tools: [
      'React',
      'Redux',
      'Jest',
      'Styled Components',
      'Node',
      'Express',
      'MongoDB',
      'JWT',
      'Firebase',
    ],
    image: projectTravelStories,
    url: 'https://github.com/KovDimaY/Trip-Reviewer',
  },
  {
    id: 3,
    name: 'SimpleChat',
    nameInStore: 'chat',
    description: `
    This is a simple chat with a support of different rooms
    written with NodeJS and Socket.IO. The purpose of the project
    is to learn and practice how to use Socket.IO and to have fun!
    This is my first project where I incorporated "Projects" feature
    from GitHub to manage the process of development with an automated
    Kanban board and also this is my first project where I use Versioning
    and descriptive Releases. This project has a strict development
    organization with 3-layer git flow (master, development and feature
    branches) and all the features and development process are well
    documented using Github Issues and descriptive commits. Just
    tried to make it well organized and to feel like a real company
    development process.
  `,
    tools: ['Node', 'jQuery', 'Socket.io', 'Mocha'],
    image: projectSimpleChat,
    url: 'https://github.com/KovDimaY/SimpleChat-Socket.io',
  },
  {
    id: 2,
    name: 'React-Highcharts Playground',
    nameInStore: 'charts',
    description: `
    This project was created to learn and practice my
    knowledge of React.js and to integrate Highcharts as
    react components in an application with Express.js back-end.
    Also, I tried to collect in one place all my knowledge
    about Highcharts and how to work with them, where it
    will be not only useful but also interesting to see results.
    This project can be useful for people who are not very
    familiar with the Highcharts and who want to see different
    applications and use-cases of all the basic charts, using
    React to manage all the interactions.
  `,
    tools: ['React', 'Highcharts', 'Webpack'],
    image: projectReactHighcharts,
    url: 'https://github.com/KovDimaY/React-Highcharts',
  },
  {
    id: 5,
    name: 'Memory Game',
    nameInStore: 'memory',
    description: `
    This is a classical Memory Game created with pure
    Javascript to practice DOM manipulations and Local Storage usage.
    There is a couple of options that player can use to customize this game.
    User has a possibility to choose the number of elements to
    play with (12, 18, 24 or 30) and the type of the elements.
    Currently there are next game modes: numbers, characters,
    colors and pictures.
  `,
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: projectMemoryGame,
    url: 'https://github.com/KovDimaY/Memory-Game',
  },
  {
    id: 1,
    name: 'KovDimaY',
    nameInStore: 'kovdimay',
    description: `
    This project was created to practice my skills in programming,
    game design and game development in general, and also to satisfy
    my passion to create. There are several games developed using Microsoft
    XNA Framework for C# and Unity. All games have documentation such as
    Game Design Document and Pitch Document.
    Games are free to download, and they can be played on Windows
    computers. Hope people will enjoy playing them.
  `,
    tools: ['C#', 'XNA Framework', 'Unity'],
    image: projectKovdimay,
    url: 'http://kovalenkody.wixsite.com/kovdimay',
  },
];
