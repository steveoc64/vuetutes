var app = new Vue({
    el: '#app',
    data: {
        brand: 'VueMastery',
        product: 'Socks',
        url: 'http://theoldowlsscarf.com',
        variant: 0,
        onSale: false,
        details: [
            "green socks",
            "more stuff",
            "and even more",
        ],
        variants: [
            {id: 1, color: 'green', image: 'vuesocks-green.jpg', inventory: 10},
            {id: 2, color: 'red', image: 'vuesocks-green.jpg', inventory: 10},
            {id: 3, color: 'blue', image: 'vuesocks-blue.jpg', inventory: 10},
            {id: 4, color: 'yellow', image: 'vuesocks-blue.jpg', inventory: 10},
        ],
        cart: 0,
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.variant].image
        },
        inStock() {
            return this.variants[this.variant].inventory > 0
        },
        inventory() {
            return this.variants[this.variant].inventory
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
            this.variants[this.variant].inventory--;
        },
        updateImage(i) {
            this.variant = i
        },
        takeFromCart() {
            this.cart -= 1;
            if (this.cart <= 0) {
                this.cart = 0
            }
            this.variants[this.variant].inventory++
        },
    },
});