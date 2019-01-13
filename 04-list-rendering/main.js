var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'vuesocks.jpg',
        url: 'http://theoldowlsscarf.com',
        inventory: 100,
        inStock: true,
        onSale: false,
        details: [
            "green socks",
            "more stuff",
            "and even more",
        ]
    }
})