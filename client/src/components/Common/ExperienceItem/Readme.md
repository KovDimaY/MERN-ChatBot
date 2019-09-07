ExperienceItem examples


```js
const { experiences } = require('components/Pages/Experience/constants');

<>
  <ExperienceItem
    image={experiences[0].image}
    companyName={experiences[0].companyName}
    companyLink={experiences[0].companyLink}
    position={experiences[0].position}
    description={experiences[0].description}
    tools={experiences[0].tools}
    location={experiences[0].location}
    start={experiences[0].start}
  />

  <ExperienceItem
    image={experiences[1].image}
    companyName={experiences[1].companyName}
    companyLink={experiences[1].companyLink}
    position={experiences[1].position}
    description={experiences[1].description}
    tools={experiences[1].tools}
    location={experiences[1].location}
    start={experiences[1].start}
    finish={experiences[1].finish}
  />

  <ExperienceItem
    image={experiences[2].image}
    companyName={experiences[2].companyName}
    companyLink={experiences[2].companyLink}
    position={experiences[2].position}
    description={experiences[2].description}
    responsibilities={experiences[2].responsibilities}
    location={experiences[2].location}
    start={experiences[2].start}
    finish={experiences[2].finish}
  />

  <ExperienceItem
    image={experiences[3].image}
    companyName={experiences[3].companyName}
    companyLink={experiences[3].companyLink}
    position={experiences[3].position}
    description={experiences[3].description}
    responsibilities={experiences[3].responsibilities}
    location={experiences[3].location}
    start={experiences[3].start}
    finish={experiences[3].finish}
  />
</>
```