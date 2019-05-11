QuickReplyItem examples


```js
const { quickReplyItemData : data } = require('./stories/mockData');

<>
  <QuickReplyItem
    type={data[0].type}
    text={data[0].text}
    value={data[0].value}
    onClick={() => {}}
  />

  <QuickReplyItem
    type={data[1].type}
    text={data[1].text}
    value={data[1].value}
    onClick={() => {}}
  />

  <QuickReplyItem
    type={data[2].type}
    text={data[2].text}
    value={data[2].value}
    onClick={() => {}}
  />

  <QuickReplyItem
    type={data[3].type}
    text={data[3].text}
    value={data[3].value}
    onClick={() => {}}
  />
</>
```