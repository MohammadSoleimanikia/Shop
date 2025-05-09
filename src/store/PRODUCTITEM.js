
// Updated titles and categories to clothing-related items
const PRODUCTS = [
    {
        id: 101,
        gender: "Men",
        title: "Men's Graphic T-Shirt",
        rating: 4.2,
        price: 19.99,
        description:
            "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        colors: ["Blue", "Gray", "White"],
        category: "T-Shirts",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt-cat.webp",
        ],
        sizes: ["S", "M", "L", "XL"],
        reviews: [
            {
                username: "johnDoe",
                comment: "Great for casual wear, very comfortable.",
                rating: 4,
            },
            {
                username: "styleFan",
                comment: "Stylish and affordable.",
                rating: 5,
            },
        ],
    },
    {
        id: 102,
        gender: "Women",
        title: "Women's Summer Dress",
        rating: 4.8,
        price: 29.99,
        description:
            "This summer dress is lightweight and perfect for warm weather. Made with breathable fabric for all-day comfort.",
        colors: ["Pink", "White", "Black"],
        category: "Dresses",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        reviews: [
            {
                username: "janeDoe",
                comment: "Perfect for summer, lightweight and stylish.",
                rating: 5,
            },
            {
                username: "fashionista",
                comment: "Love the design and comfort.",
                rating: 5,
            },
        ],
    },
    {
        id: 103,
        gender: "Men",
        title: "Kids' Hoodie",
        rating: 4.3,
        price: 24.99,
        description:
            "This hoodie is cozy and perfect for kids. Made with soft fabric to keep them warm and comfortable.",
        colors: ["Red", "Yellow", "Blue"],
        category: "Hoodies",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["XS", "S", "M", "L"],
        reviews: [
            {
                username: "parent123",
                comment: "My kid loves this hoodie!",
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
        gender: "Men",
        title: "Men's Denim Jacket",
        rating: 4.7,
        price: 49.99,
        description:
            "This denim jacket is a classic wardrobe staple. Durable and stylish for any casual outing.",
        colors: ["Blue", "Black"],
        category: "Jackets",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["M", "L", "XL", "XXL"],
        reviews: [
            {
                username: "outdoorGuy",
                comment: "Perfect for casual wear, very sturdy.",
                rating: 5,
            },
            {
                username: "styleLover",
                comment: "Comfortable and durable.",
                rating: 4,
            },
        ],
    },
    {
        id: 105,
        gender: "Women",
        title: "Women's Cardigan",
        rating: 4.6,
        price: 34.99,
        description:
            "This cardigan is soft and cozy, perfect for layering during cooler weather.",
        colors: ["Beige", "White", "Black"],
        category: "Sweaters",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["S", "M", "L", "XL"],
        reviews: [
            {
                username: "cozyFan",
                comment: "Great for layering, very comfortable.",
                rating: 5,
            },
            {
                username: "fashionFan",
                comment: "Stylish and warm.",
                rating: 4,
            },
        ],
    },
    {
        id: 106,
        gender: "Unisex",
        title: "Unisex Sweatpants",
        rating: 4.1,
        price: 19.99,
        description:
            "These sweatpants are comfortable and versatile, perfect for lounging or casual outings.",
        colors: ["Gray", "Blue", "Black"],
        category: "Pants",
        img: [
            "/images/men/t-shirt-black.webp",
            "/images/men/t-shirt-cat.webp",
            "/images/men/t-shirt.webp",
        ],
        sizes: ["S", "M", "L", "XL"],
        reviews: [
            {
                username: "comfortSeeker",
                comment: "Affordable and comfortable for everyday wear.",
                rating: 4,
            },
            {
                username: "casualFan",
                comment: "Good quality for the price.",
                rating: 4,
            },
        ],
    },
];

export default PRODUCTS;
