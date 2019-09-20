CertificationItem examples

- Hidden Certificate

```js
const { UC_B6BARC8V } = require('images');

<CertificationItem
  title="This text will be hidden until user discovers it"
  image={UC_B6BARC8V}
  url="This url will not be clickable untill user discovers it"
/>
```

- Udemy Certificate

```js
const { UC_B6BARC8V } = require('images');

<CertificationItem
  title="Advanced React and Redux: 2018 Edition"
  image={UC_B6BARC8V}
  url="https://www.udemy.com/certificate/UC-B6BARC8V/"
  discovered
/>
```

- Codecademy Certificate

```js
const { C_11467555 } = require('images');

<CertificationItem
  title="Test-Driven Development"
  image={C_11467555}
  url="https://www.credential.net/e524eujo"
  discovered
/>
```

- Coursera Sertificate

```js
const { GH93LKLL72BR } = require('images');

<CertificationItem
  title="Graph Search, Shortest Paths, and Data Structures"
  image={GH93LKLL72BR}
  url="https://www.coursera.org/account/accomplishments/certificate/GH93LKLL72BR"
  discovered
/>
```