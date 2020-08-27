var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Warm fuzzy socks',
        image: './img/socks-gray.jpeg',
        inventory: 0,
        details: ["80% cotton", "Water resistant", "Gender neutral"],
        variants: [
            {
                variantId: 1234,
                variantColor: "Gray",
                variantImage: './img/socks-gray.jpeg',
            },
            {
                variantId: 1235,
                variantColor: "Black",
                variantImage: './img/socks-black.jpg',
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
        updateProduct: function(variantImage){
            this.image = variantImage
        },
        
        removeFromCart: function(){
            if(this.cart == 0){
                alert("Empty cart!")
            }
            else{
                this.cart-=1
            }
        }
    }
})

