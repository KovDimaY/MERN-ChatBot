import {
  experienceIcicle,
  experienceMBAS,
  experienceEnixan,
  experienceBigfinite,
  experienceCornerjob,
} from '../../../images';

export const experiences = [
  {
    id: 5,
    image: experienceCornerjob,
    companyName: 'Cornerjob',
    companyLink: 'https://www.cornerjob.com',
    position: 'JS Full Stack Developer',
    description: `Responsible for the whole FE of the platform,
      working with Webmanager and BO projects (React/Redux)
      and SEO-Landing project (Symfony/Twig/jQuery). Paying attention
      to UT, test coverage and CI/CD with Jest/Enzyme/Jenkins.
      Using mostly SCRUM methodologies and Kanban for some smaller projects.
    `,
    start: new Date('2018-06-11'),
    location: 'Barcelona, Spain',
    tools: [
      'React', 'Redux', 'Redux-Saga', 'Jest',
      'Styled Components', 'Symfony', 'Jenkins',
      'Docker', 'AWS', 'Node',
    ],
  },
  {
    id: 4,
    image: experienceBigfinite,
    companyName: 'Bigfinite Inc',
    companyLink: 'https://www.bigfinite.com/',
    position: 'JS Frontend Developer',
    description: `I was developing new user-facing features for
      the big web platform and providing bug-fixing support
      for already existing ones. Mostly my work was related to
      data representation of the different numeric and categoric
      AI and ML models and algorithms or other scientific things.
    `,
    start: new Date('2017-04-18'),
    finish: new Date('2018-06-06'),
    location: 'Barcelona, Spain',
    tools: ['React', 'AWS', 'Node', 'jQuery', 'Highcharts'],
  },
  {
    id: 3,
    image: experienceEnixan,
    companyName: 'Enixan Entertainment',
    companyLink: 'http://www.enixan.com/en/',
    position: 'Game Designer',
    description: `I have developed a new genre direction in the
      company (Match-3). There are a game created from my scratch
      and a prepared background for developing other similar projects
      with the developed game engine.
    `,
    start: new Date('2015-09-07'),
    finish: new Date('2016-07-21'),
    location: 'Kyiv, Ukraine',
    responsibilities: [
      'market analysis of social and mobile games',
      'development of the concept of games',
      'development of the setting and narrative of games',
      'elaboration of the economics (balance) of games',
      'elaboration of gameplay',
      'level design',
      'creation of game design documents',
      'support of development, testing, consulting',
    ],
  },
  {
    id: 2,
    image: experienceMBAS,
    companyName: 'MBA Strategy',
    companyLink: 'http://www.mbastrategy.ru/',
    position: 'Math Consultant',
    description: `Teaching people how to prepare for the quantitative part of the GMAT/GRE.

    `,
    start: new Date('2013-01'),
    finish: new Date('2015-05'),
    location: 'Kyiv, Ukraine',
    responsibilities: [
      'individual lessons and group (4-9 students) lectures',
      'online lessons via Skype',
      'develop schemes of work, lesson plans and study materials',
      'assign and grade class work, homework, tests and assignments',
      'identify and select different instructional resources and methods to meet students\' varying needs',
      'organize and run educational events',
    ],
  },
  {
    id: 1,
    image: experienceIcicle,
    companyName: 'Icicle Seafoods',
    companyLink: 'http://www.icicleseafoods.com/',
    position: 'Cannery Worker',
    description: 'Work&Travel program which helped me to improve my English and teamwork skills. It made me more organized, more hardworking, more hardy.',
    start: new Date('2012-05'),
    finish: new Date('2012-09'),
    location: 'Alaska, USA',
  },
];
