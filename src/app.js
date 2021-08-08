import EventEmitter from './utils/event-emitter';

App({
  cart: [],
  cartEvent: new EventEmitter(),

  onAddToCart(product) {
    this.cart.push(product);
    this.cartEvent.emit('cart::update', this.cart);
  },
});
