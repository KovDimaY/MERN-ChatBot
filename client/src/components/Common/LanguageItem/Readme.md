#### LanguageItem examples

Hidden element

```js
const { languages } = require('components/Pages/Home/constants');

<>
  <LanguageItem image="image" name="Whatever" level="This will be hidden" />
</>;
```

Discovered elements

```js
const { languages } = require('components/Pages/Home/constants');

<>
  <LanguageItem
    image={languages[0].image}
    name={languages[0].name}
    level={languages[0].level}
    discovered
  />

  <LanguageItem
    image={languages[1].image}
    name={languages[1].name}
    level={languages[1].level}
    discovered
  />

  <LanguageItem
    image={languages[2].image}
    name={languages[2].name}
    level={languages[2].level}
    discovered
  />

  <LanguageItem
    image={languages[3].image}
    name={languages[3].name}
    level={languages[3].level}
    discovered
  />
</>;
```
