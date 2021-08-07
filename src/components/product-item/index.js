Component({
  props: {
    id: '',
    image_url: '',
    name: '',
  },

  methods: {
    _onAddToCart() {
      this.props.onAddToCart(this.props);
    },
  },
});
