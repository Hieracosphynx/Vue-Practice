Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `<div class = "product">
    <div class="product-image">
        <img v-bind:src="image" alt="">
    </div>
    <div class="product-main">
        <div class="product-info">
            <h1>{{ title }}</h1>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
        </div>
        <p :class="{ onSale: onSale }" v-show="onSale">On Sale</p>
        <div class="product-instock">
            <p v-if="inventory > 10">In stock</p>
            <!-- Use <p v-show=""> to not show the out of stock element. -->
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
            <p v-else> Out of stock </p>
            <p>Shipping: {{ shipping }}</p>
        </div>
        <div v-for="(variant, index) in variants" 
            :key="variant.varaintId"
            class="color-box"
            :style="{ backgroundColor:  variant.variantColor }"
            @mouseover="updateProduct(index)">
            <!-- updateProduct(variant.variantImage) -->
        </div>
        <button v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ 'disabled-button': !inStock }">Add to cart</button>
                <p :class="{ textDecoration: inStock }">Out of Stock</p>
        <div class="cart">
            <p>Cart {{ cart }}</p>
        </div>
        <button id="warning-button" v-on:click="removeFromCart">Remove from cart</button>
    </div>
</div>`,

data(){
    return {
        brand: 'MDLC',
        product: 'Socks',
        description: 'Warm fuzzy socks',
        // image: './img/socks-gray.jpeg',
        selectedVariant: 0,
        inventory: 0,
        details: ["80% cotton", "Water resistant", "Gender neutral"],
        variants: [
            {
                variantId: 1234,
                variantColor: "Gray",
                variantImage: './img/socks-gray.jpeg',
                variantQuantity: 10,
                variantOnSale: true,
            },
            {
                variantId: 1235,
                variantColor: "Black",
                variantImage: './img/socks-black.jpg',
                variantQuantity: 0,
                variantOnSale: false,
            }
        ],
        sizes: [
            {
                sizeId: 1444,
                sizeNum: 9
            },
            {
                sizeId: 1445,
                sizeNum: 10
            },
            {
                sizeId: 1446,
                sizeNum: 10.5
            }
        ],
        cart: 0,
    }
},
methods: {
    addToCart: function() {
        this.cart+=1
    },

    updateProduct: function(index){
        this.selectedVariant = index
        console.log(index)

    },
    
    removeFromCart: function(){
        if(this.cart == 0){
            alert("Empty cart!")
        }
        else{
            this.cart-=1
        }
    }

},

computed: {
    title(){
        return this.brand + ' ' + this.product
    },

    image(){
        return this.variants[this.selectedVariant].variantImage
    },

    inStock(){
        return this.variants[this.selectedVariant].variantQuantity
    },

    onSale(){
        return this.variants[this.selectedVariant].variantOnSale
    },
    
    shipping(){
        if(this.premium){
            return "Free"
        }
        return 2.99
    }
},
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
    }
})

