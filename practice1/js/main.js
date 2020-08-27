var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Warm fuzzy socks',
        image: './img/socks.jpeg',
        inventory: 0,
        details: ["80% cotton", "Water resistant", "Gender neutral"],
        variants: [
            {
                variantId: 1234,
                variantColor: "Gray"
            },
            {
                variantId: 1235,
                variantColor: "Black"
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
        ]
        
    }
})

