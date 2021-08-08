Component({
  props: {
    id: '',
    image_url: '',
    name: '',
  },

  methods: {
    _onAddToCart() {
      getApp().onAddToCart(this.props);
    },
  },
});
