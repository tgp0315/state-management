export default class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(event, cb) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
    return self.events[event].push(cb);
  }
  publish(event, data = {}) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }
    return self.events[event].map(cb => cb(data));
  }
}