Chatbot examples

- Without messages closed

```js
<Chatbot
  show={false}
  onToggleShow={() => {}}
  onSubmitMessage={() => {}}
  onReply={() => {}}
/>
```

- Without messages opened

```js
<div style={{ position: 'relative' }}>
  <Chatbot
    show
    onToggleShow={() => {}}
    onSubmitMessage={() => {}}
    onReply={() => {}}
  />
</div>
```

- With several text messages

```js
const { textMessages } = require('./stories/mockData');

<Chatbot
  show
  onToggleShow={() => {}}
  onSubmitMessage={() => {}}
  onReply={() => {}}
  messages={textMessages}
/>
```

- With quick reply messages

```js
const { quickRepliesMessages } = require('./stories/mockData');

<Chatbot
  show
  onToggleShow={() => {}}
  onSubmitMessage={() => {}}
  onReply={() => {}}
  messages={quickRepliesMessages}
/>
```

- With cards message

```js
const { cardsMessages } = require('./stories/mockData');

<Chatbot
  show
  onToggleShow={() => {}}
  onSubmitMessage={() => {}}
  onReply={() => {}}
  messages={cardsMessages}
/>
```