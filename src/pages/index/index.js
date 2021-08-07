Page({
  data: {
    cart: [],
    products: [
      {
        id: '1',
        image_url:
          'https://salt.tikicdn.com/cache/400x400/ts/product/e1/66/c2/47859ea06eb4b00ad41bbe81636e4373.jpg',
        name: 'Iphone 12',
      },
      {
        id: '2',
        image_url:
          'https://salt.tikicdn.com/cache/400x400/ts/product/a7/e8/d6/33d72e8efc6ef58d5fbe0cb1770c797e.jpg',
        name: 'Macbook Pro',
      },
    ],
  },

  onAddToCart(product) {
    const { cart } = this.data;
    this.setData({
      cart: [...cart, product],
    });
  },
});
