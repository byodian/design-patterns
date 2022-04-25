class PubSub {
  constructor() {
    // Storage for topics that can be broadcast
    // or listened to
    this.topics = {};
    
    // A topic identifier
    this.subUid = -1;
  }

  publish(topic, args) {
    if (!this.topics[topic]) {
      return false;
    }

    const subscribers = this.topics[topic];
    let len = subscribers ? subscribers.length : 0;

    // for (let i = 0; i < len; i++) {
    //   subscribers[i].func(topic, args);
    // }

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  }

  subscribe(topic, func) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    const token = (++this.subUid).toString();
    this.topics[topic].push({
      token,
      func
    });

    return token
  }

  unsubscribe(token) {
    for (const m in this.topics) {
      for(let i = 0; i < this.topics[m].length; i++) {
        if (this.topics[m][i].token === token) {
          this.topics[m].splice(i, 1);
          return token;
        }
      }
    }
    
    return this;
  }
}

const messageLogger = (topics, data) => {
  console.log(`Logging: ${topics} : ${data}`);
}

// Example: A simple message logger
const pubsub = new PubSub();

const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

pubsub.publish('inbox/newMessage', 'Hello world!');

pubsub.publish('inbox/newMessage', ['test', 'a', 'b']);

pubsub.publish('inbox/newMessage', {
  sender: 'hello',
  body: 'world',
});

pubsub.unsubscribe(subscription);

pubsub.publish('inbox/newMessage', 'Hello world!');
