QuickReplies examples

```js
const { quickRepliesData } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <QuickReplies data={quickRepliesData} onReply={() => {}} />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <QuickReplies data={quickRepliesData} onReply={() => {}} />
  </div>
</div>
```