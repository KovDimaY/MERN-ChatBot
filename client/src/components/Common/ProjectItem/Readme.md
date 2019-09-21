#### ProjectItem examples

Hidden element

```js
const { projects } = require('components/Pages/Projects/constants');

<>
  <ProjectItem
    discovered={{
      tools: false,
      description: false,
    }}
    image={projects[0].image}
    name={projects[0].name}
    description={projects[0].description}
    tools={projects[0].tools}
    url={projects[0].url}
  />
</>
```


Everything discovered

```js
const { projects } = require('components/Pages/Projects/constants');

<>
  <ProjectItem
    image={projects[0].image}
    name={projects[0].name}
    description={projects[0].description}
    tools={projects[0].tools}
    url={projects[0].url}
  />

  <ProjectItem
    image={projects[1].image}
    name={projects[1].name}
    description={projects[1].description}
    tools={projects[1].tools}
    url={projects[1].url}
  />

  <ProjectItem
    image={projects[2].image}
    name={projects[2].name}
    description={projects[2].description}
    tools={projects[2].tools}
    url={projects[2].url}
  />

  <ProjectItem
    image={projects[3].image}
    name={projects[3].name}
    description={projects[3].description}
    tools={projects[3].tools}
    url={projects[3].url}
  />

  <ProjectItem
    image={projects[0].image}
    name={projects[4].name}
    description={projects[4].description}
    tools={projects[4].tools}
    url={projects[4].url}
  />
</>
```