# MERN-ChatBot

[![Build Status](https://travis-ci.com/KovDimaY/MERN-ChatBot.svg?branch=master)](https://travis-ci.com/KovDimaY/MERN-ChatBot)
[![Coverage Status](https://coveralls.io/repos/github/KovDimaY/MERN-ChatBot/badge.svg?branch=master)](https://coveralls.io/github/KovDimaY/MERN-ChatBot?branch=master)
[![GitHub version](https://img.shields.io/badge/version-1.2.0-yellow.svg)](https://github.com/KovDimaY/MERN-ChatBot/releases)
[![GitHub demo](https://img.shields.io/badge/demo-available-e60000.svg)](https://mern-chatbot.herokuapp.com/)
[![GitHub docs](https://img.shields.io/badge/docs-storybook-00ccff.svg)](https://mern-chatbot.herokuapp.com/docs/storybook)
[![GitHub docs](https://img.shields.io/badge/docs-styleguide-e600e6.svg)](https://mern-chatbot.herokuapp.com/docs/styleguide)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/KovDimaY/MERN-ChatBot/blob/master/LICENSE)

This is a small project to practice a MERN stack and to learn how to make a chatbot with the DialogFlow from Google Cloud Platform. It is still under development so more features are coming soon! Stay tuned! :D

The last deployed production version is [**MERN-ChatBot v1.2.0**](https://github.com/KovDimaY/MERN-ChatBot/releases). 
<br>
<br>

### There are two environments with independent databases:

**Production** (MASTER branch): https://mern-chatbot.herokuapp.com/

**Pre-production** (DEVEL branch): https://mern-chatbot-pre.herokuapp.com/
<br>
<br>

### Also you can access Storybook and Styleguide Documentation for each environment going to:
```
[origin]/docs/storybook
[origin]/docs/styleguide
```

I will appreciate a lot your feedback and your opinion about the project. Feel free to create an issue or to contact me via LinkedIn, mail or social networks.
Thank you in advance!
<br>
<br>

### Screenshots:
1) Desktop:<br>
![image](https://user-images.githubusercontent.com/26466644/50377510-09d1ad80-061f-11e9-8835-ccd79f75b905.png)

2) Mobile:<br>
![image](https://user-images.githubusercontent.com/26466644/50377555-c7f53700-061f-11e9-9799-7f7dcf444927.png)

3) Test Coverage:<br>
![image](https://user-images.githubusercontent.com/26466644/56457413-e293ae80-637a-11e9-8531-c851c73022a8.png)
<br>
<br>



### For contributors:
Even though it is a simple project that was created to practice some JS programming, everyone is welcomed to contribute. I really appreciate any commitment to the projects I have created! :D

To understand better our basic approaches to contributions, please take a look at the following resources: 
- [Code of Conduct](https://github.com/KovDimaY/MERN-ChatBot/blob/master/CODE_OF_CONDUCT.md)
- [How to contribute to MERN-ChatBot](https://github.com/KovDimaY/MERN-ChatBot/blob/master/CONTRIBUTING.md)
- [License](https://github.com/KovDimaY/MERN-ChatBot/blob/master/LICENSE)

<br>
<br>



### To run the project in local:
##### Clone the project: 
```
git clone https://github.com/KovDimaY/MERN-ChatBot.git
```

##### Open it:
```
cd MERN-ChatBot
```

##### Install all required packages:
```
npm install
```

##### Run the mongoDB database:
```
npm run mongo
```

##### IN THE NEW TAB run the combined dev-server:
```
npm run dev
```

##### Open your browser at http://localhost:3000/

<br>
<br>



### To run test coverage:
##### In the root of the project run the commands:
```
npm run test
```

##### To run linter (ESLint):
```
npm run lint
```

##### To generate coverage report:
```
npm run test:coverage
```

##### To open visual coverage report in browser:
```
npm run coverage:report
```

##### To update outdated snapshots:
```
npm run test:update
```

<br>
<br>



### Storybooks:
##### To run development server for storybook:
```
npm run storybook
```

##### To build it for deployment:
```
npm run build-storybook
```

<br>
<br>



### Styleguidist:
##### To run development server for styleguidist:
```
npm run styleguide
```

##### To build it for deployment:
```
npm run build-styleguide
```

Due to the way how Styleguidist is implemented and working, there will be incompatibility if the project has dependencies on the external CSS libraries. In my project I use MaterialCSS and it affects appearance of the styleguide. To remove some of the effects that I do not like to have, I had to create the ```client/styleguide/rereset-styles.css``` file where I put the original styles of Styleguidist which were overwriten by the MaterialCSS library. But the problem is that class names of the styleguide are dynamic and change every time when the new version of the styleguide is compiled. So before deploying the new version of the styleguide, we have to remember to update selectors names to be sure that the layout of styleguide is not broken.