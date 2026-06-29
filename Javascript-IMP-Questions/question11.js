// Publish–Subscribe (Pub/Sub) Pattern

class EventBus {
  constructor() {
    this.events = {};
  }

  // Subscribe to an event
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  // Unsubscribe from an event
  unsubscribe(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      (subscriber) => subscriber !== callback,
    );
  }

  // Publish an event
  publish(eventName, data) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((subscriber) => subscriber(data));
  }
}

// Create Event Bus
const eventBus = new EventBus();

// Subscribers
const subscriber1 = (message) => {
  console.log("Subscriber 1:", message);
};

const subscriber2 = (message) => {
  console.log("Subscriber 2:", message);
};

// Subscribe
eventBus.subscribe("news", subscriber1);
eventBus.subscribe("news", subscriber2);

// Publish
eventBus.publish("news", "Breaking News: JavaScript Interview Today!");

// Unsubscribe
eventBus.unsubscribe("news", subscriber1);

// Publish again
eventBus.publish("news", "Breaking News: Subscriber 1 has left!");
