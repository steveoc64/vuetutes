Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
<div class="product">

    <div class="product-image">
        <a :href="url">
            <img :src="image" alt="{{ image }}">
        </a>
    </div>

    <div class="product-info">
        <h1>Product goes here {{ title }}</h1>
        <span v-show="onSale && inStock">On Sale !!</span>
        <p v-if="inventory >= 5">In Stock ({{ inventory}} left)</p>
        <p v-else-if="inventory < 5 && inventory > 0">Almost sold out</p>
        <p v-else class="outOfStock">Out of Stock</p>
        <p>Shipping {{ shipping }}</p>

        Details
        <product-details :details="details"></product-details>

        Variants (current = {{ variant }})
        <div v-for="(v,k) in variants"
             class="color-box"
             :style="{ backgroundColor: v.color}"
             :key="v.id"
             @mouseover="updateImage(k)">
        </div>

        <button @click="addToCart" :disabled="!inStock"
                :class="{ disabledButton: !inStock }">Add to Cart
        </button>

        <div class="cart">
            Cart ({{ cart }})
        </div>

        <button @click="takeFromCart">No no !</button>
    </div>
</div>
    `,
    data() {
        return {
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
            cart: 0
        }
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
            },
            shipping() {
                return this.premium ? "Free" : "$10"
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

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
    }
});