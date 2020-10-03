Message examples

- Text message from the bot

```js
const { data } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <Message
      type={data[0].type}
      author={data[0].author}
      msg={data[0].msg}
      onReply={() => {}}
    />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <Message
      type={data[0].type}
      author={data[0].author}
      msg={data[0].msg}
      onReply={() => {}}
    />
  </div>
</div>;
```

- Text message from the user

```js
const { data } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <Message
      type={data[1].type}
      author={data[1].author}
      msg={data[1].msg}
      onReply={() => {}}
    />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <Message
      type={data[1].type}
      author={data[1].author}
      msg={data[1].msg}
      onReply={() => {}}
    />
  </div>
</div>;
```

- Cards message from the bot

```js
const { data } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <Message
      type={data[2].type}
      author={data[2].author}
      msg={data[2].msg}
      onReply={() => {}}
    />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <Message
      type={data[2].type}
      author={data[2].author}
      msg={data[2].msg}
      onReply={() => {}}
    />
  </div>
</div>;
```

- Quick reply message from the bot

```js
const { data } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <Message
      type={data[3].type}
      author={data[3].author}
      msg={data[3].msg}
      onReply={() => {}}
    />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <Message
      type={data[3].type}
      author={data[3].author}
      msg={data[3].msg}
      onReply={() => {}}
    />
  </div>
</div>;
```

- Quick reply message from the bot

```js
const { data } = require('./stories/mockData');

<div style={{ padding: '25px' }}>
  <p>No limits:</p>
  <div style={{ margin: '25px' }}>
    <Message
      type={data[4].type}
      author={data[4].author}
      msg={data[4].msg}
      onReply={() => {}}
    />
  </div>
  <p>Real life scenario:</p>
  <div style={{ margin: '25px', maxWidth: '450px', border: '1px solid black' }}>
    <Message
      type={data[4].type}
      author={data[4].author}
      msg={data[4].msg}
      onReply={() => {}}
    />
  </div>
</div>;
```
