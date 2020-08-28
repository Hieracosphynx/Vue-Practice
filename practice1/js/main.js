var app = new Vue({
    el: '#app',
    data: {
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
        }
    },
})

