// Updated product data with unique values
const PRODUCTS = [
    {
        id: 101,
        title: "Men's Casual Sneakers",
        rating: 4.2,
        price: 79.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Blue", "Gray", "White"],
        category: "Shoes",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt-cat.webp",
        ],
        sizes: ["6", "7", "8", "9", "10"],
        reviews: [
            {
                username: "johnDoe",
                comment: "Great for casual wear, very comfortable.",
                rating: 4,
            },
            {
                username: "sneakerFan",
                comment: "Stylish and affordable.",
                rating: 5,
            },
        ],
    },
    {
        id: 102,
        title: "Women's Running Shoes",
        rating: 4.8,
        price: 99.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Pink", "White", "Black"],
        category: "Shoes",
        img: [
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["5", "6", "7", "8", "9"],
        reviews: [
            {
                username: "janeDoe",
                comment: "Perfect for running, lightweight and durable.",
                rating: 5,
            },
            {
                username: "runnerGirl",
                comment: "Love the design and comfort.",
                rating: 5,
            },
        ],
    },
    {
        id: 103,
        title: "Kids' Sports Shoes",
        rating: 4.3,
        price: 49.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Red", "Yellow", "Blue"],
        category: "Shoes",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt-black.webp",
        ],
        sizes: ["3", "4", "5", "6"],
        reviews: [
            {
                username: "parent123",
                comment: "My kid loves these shoes!",
                rating: 5,
            },
            {
                username: "happyMom",
                comment: "Good quality for the price.",
                rating: 4,
            },
        ],
    },
    {
        id: 104,
        title: "Men's Hiking Boots",
        rating: 4.7,
        price: 129.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Brown", "Black"],
        category: "Boots",
        img: [
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["8", "9", "10", "11", "12"],
        reviews: [
            {
                username: "outdoorGuy",
                comment: "Perfect for hiking, very sturdy.",
                rating: 5,
            },
            {
                username: "trailLover",
                comment: "Comfortable and durable.",
                rating: 4,
            },
        ],
    },
    {
        id: 105,
        title: "Women's Sandals",
        rating: 4.6,
        price: 39.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Beige", "White", "Black"],
        category: "Sandals",
        img: [
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["5", "6", "7", "8", "9"],
        reviews: [
            {
                username: "summerLover",
                comment: "Great for summer, very comfortable.",
                rating: 5,
            },
            {
                username: "beachFan",
                comment: "Stylish and lightweight.",
                rating: 4,
            },
        ],
    },
    {
        id: 106,
        title: "Unisex Flip Flops",
        rating: 4.1,
        price: 19.99,
        description:
            "this graphic t-shirt is perfect for any occasion.Crafted from a soft and breathable fabric. offers superior comfort and style  ",
        colors: ["Green", "Blue", "Black"],
        category: "Flip Flops",
        img: [
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["6", "7", "8", "9", "10"],
        reviews: [
            {
                username: "beachWalker",
                comment: "Affordable and comfortable for the beach.",
                rating: 4,
            },
            {
                username: "flipFlopFan",
                comment: "Good quality for the price.",
                rating: 4,
            },
        ],
    },
];

export default PRODUCTS;
