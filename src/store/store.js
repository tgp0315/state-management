import PubSub from "../js/pubsub";
export default class Store {
  constructor(params) {
    this.actions = {};
    this.mutations = {};
    this.state = {};
    this.staus = "resting";
    this.events = new PubSub();
  }
} 