#### HobbyItem examples

Completelly hidden element

```js
const { hobbies } = require('components/Pages/Home/constants');

<>
  <HobbyItem
    image={hobbies[0].image}
    name={hobbies[0].name}
    description={hobbies[0].description}
  />
</>;
```

Partially hidden element

```js
const { hobbies } = require('components/Pages/Home/constants');

<>
  <HobbyItem
    image={hobbies[0].image}
    name={hobbies[0].name}
    description={hobbies[0].description}
    discovered
  />
</>;
```

Discovered elements

```js
const { hobbies } = require('components/Pages/Home/constants');

<>
  <HobbyItem
    image={hobbies[0].image}
    name={hobbies[0].name}
    description={hobbies[0].description}
    discovered
    discoveredDetails
  />

  <HobbyItem
    image={hobbies[1].image}
    name={hobbies[1].name}
    description={hobbies[1].description}
    discovered
    discoveredDetails
  />

  <HobbyItem
    image={hobbies[2].image}
    name={hobbies[2].name}
    description={hobbies[2].description}
    discovered
    discoveredDetails
  />

  <HobbyItem
    image={hobbies[3].image}
    name={hobbies[3].name}
    description={hobbies[3].description}
    discovered
    discoveredDetails
  />

  <HobbyItem
    image={hobbies[4].image}
    name={hobbies[4].name}
    description={hobbies[4].description}
    discovered
    discoveredDetails
  />
</>;
```
