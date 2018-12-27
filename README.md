# MERN-ChatBot

[![Build Status](https://travis-ci.com/KovDimaY/MERN-ChatBot.svg?branch=master)](https://travis-ci.com/KovDimaY/MERN-ChatBot)
[![Coverage Status](https://coveralls.io/repos/github/KovDimaY/MERN-ChatBot/badge.svg?branch=master)](https://coveralls.io/github/KovDimaY/MERN-ChatBot?branch=master)
[![GitHub version](https://img.shields.io/badge/version-1.1.0-yellow.svg)](https://github.com/KovDimaY/MERN-ChatBot/releases)
[![GitHub demo](https://img.shields.io/badge/demo-available-ff3399.svg)](https://mern-chatbot.herokuapp.com/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/KovDimaY/MERN-ChatBot/blob/master/LICENSE)

This is a small project to practice a MERN stack and to learn how to make a chatbot with the DialogFlow from Google Cloud Platform. It is still under development so more features are coming soon! Stay tuned! :D

The last deployed production version is [**MERN-ChatBot v1.1.0**](https://github.com/KovDimaY/MERN-ChatBot/releases). 
<br>
<br>

### There are two environments with independent databases:

**Production** (MASTER branch): https://mern-chatbot.herokuapp.com/

**Pre-production** (DEVEL branch): https://mern-chatbot-pre.herokuapp.com/

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
![image](https://user-images.githubusercontent.com/26466644/50495436-67079d80-0a29-11e9-9572-372207f5c85b.png)
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
