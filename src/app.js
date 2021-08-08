App({
  cart: [],

  onAddToCart(product) {
    this.cart.push(product);
    console.log('Cart', this.cart);
  },
});
