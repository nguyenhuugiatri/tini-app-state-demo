class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!Array.isArray(this.events[eventName])) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    if (Array.isArray(this.events[eventName])) {
      this.events[eventName].forEach((callback) => callback(data));
    }
  }

  removeListener(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(
      (listener) => listener !== callback
    );
  }
}

export default EventEmitter;
