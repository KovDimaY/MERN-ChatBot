#### EducationItem examples

Hidden element

```js
const { educations } = require('components/Pages/Education/constants');

<>
  <EducationItem
    discovered={{
      topic: false,
      activities: false,
      time: false,
    }}
    image={educations[0].image}
    schoolName={educations[0].schoolName}
    schoolLink={educations[0].schoolLink}
    topic={educations[0].topic}
    degree={educations[0].degree}
    description={educations[0].description}
    activities={educations[0].activities}
    location={educations[0].location}
    start={educations[0].start}
    finish={educations[0].finish}
  />
</>
```


Everything discovered

```js
const { educations } = require('components/Pages/Education/constants');

<>
  <EducationItem
    image={educations[0].image}
    schoolName={educations[0].schoolName}
    schoolLink={educations[0].schoolLink}
    topic={educations[0].topic}
    degree={educations[0].degree}
    description={educations[0].description}
    activities={educations[0].activities}
    location={educations[0].location}
    start={educations[0].start}
    finish={educations[0].finish}
  />

  <EducationItem
    image={educations[1].image}
    schoolName={educations[1].schoolName}
    schoolLink={educations[1].schoolLink}
    topic={educations[1].topic}
    degree={educations[1].degree}
    description={educations[1].description}
    activities={educations[1].activities}
    location={educations[1].location}
    start={educations[1].start}
    finish={educations[1].finish}
  />
</>
```