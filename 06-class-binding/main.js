var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vuesocks-green.jpg',
        url: 'http://theoldowlsscarf.com',
        inventory: 100,
        inStock: true,
        onSale: false,
        details: [
            "green socks",
            "more stuff",
            "and even more",
        ],
        variants: [
            { id: 1, color: 'green', image: 'vuesocks-green.jpg'},
            { id: 2, color: 'red', image: 'vuesocks-green.jpg'},
            { id: 3, color: 'blue', image: 'vuesocks-blue.jpg'},
            { id: 4, color: 'yellow', image: 'vuesocks-blue.jpg'},
        ],
        cart: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(url) {
            this.image = url
        },
        takeFromCart() {
            this.cart -= 1
            if (this.cart <= 0) {
                this.cart = 0
            }
        },
    },
})