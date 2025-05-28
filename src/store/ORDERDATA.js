const defaultUser = {
    id: 1,
    name: "user",
    email: "user@gmail.com",
    password: 123,
    role: "user",
    image: "https://avatars.githubusercontent.com/u/121093560?v=4"
};
export const orders = [
    {   id:1,
        items: [
            {
                id: 101,
                gender: "Men",
                title: "Men's Graphic T-Shirt",
                rating: 4.2,
                price: 19.99,
                description:
                    "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
                colors: ["blue", "grey", "white"],
                category: "T-Shirts",
                img: [
                    "/images/men/t-shirt-black.webp",
                    "/images/men/t-shirt-cat.webp",
                    "/images/men/t-shirt-cat.webp",
                ],
                stock: {
                    XS: 2,
                    S: 3,
                    M: 4,
                    L: 0,
                },
                reviews: [
                    {
                        id: 1,
                        username: "parent123",
                        comment: "My kid loves this hoodie!",
                        rating: 5,
                    },
                    {
                        id: 2,
                        username: "happyMom",
                        comment: "Good quality for the price.",
                        rating: 4,
                    },
                ],
                createdAt: "2024-05-09T12:00:00Z",
                selectedColor: "blue",
                selectedSize: "S",
                quantity: 1,
                totalPrice: 19.99,
            },
        ],
        totalPrice: 74.97,
        totalQuantity: 1,
        orderDate: "2025-05-10T13:38:12.924Z",
        user:defaultUser

    },
    {
        id:2,
        items: [
            {
                id: 101,
                gender: "Men",
                title: "Men's Graphic T-Shirt",
                rating: 4.2,
                price: 19.99,
                description:
                    "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
                colors: ["blue", "grey", "white"],
                category: "T-Shirts",
                img: [
                    "/images/men/t-shirt-black.webp",
                    "/images/men/t-shirt-cat.webp",
                    "/images/men/t-shirt-cat.webp",
                ],
                stock: {
                    XS: 2,
                    S: 3,
                    M: 4,
                    L: 0,
                },
                reviews: [
                    {
                        id: 1,
                        username: "parent123",
                        comment: "My kid loves this hoodie!",
                        rating: 5,
                    },
                    {
                        id: 2,
                        username: "happyMom",
                        comment: "Good quality for the price.",
                        rating: 4,
                    },
                ],
                createdAt: "2024-05-10T12:00:00Z",
                quantity: 1,
                totalPrice: 19.99,
                selectedColor: "blue",
                selectedSize: "S",
            },
        ],
        totalPrice: 74.97,
        totalQuantity: 1,
        orderDate: "2025-05-15T13:38:12.924Z",
        user:defaultUser
    },
    {
        id:3,
        items: [
            {
                id: 103,
                gender: "Men",
                title: "Kids' Hoodie",
                rating: 4.3,
                price: 24.99,
                description:
                    "This hoodie is cozy and perfect for kids. Made with soft fabric to keep them warm and comfortable.",
                colors: ["red", "yellow", "blue"],
                category: "Hoodies",
                img: [
                    "/images/men/hoodie.webp",
                    "/images/men/t-shirt-cat.webp",
                    "/images/men/t-shirt.webp",
                ],
                stock: {
                    XS: 2,
                    S: 3,
                    M: 4,
                    L: 0,
                },
                reviews: [
                    {
                        id: 1,
                        username: "parent123",
                        comment: "My kid loves this hoodie!",
                        rating: 5,
                    },
                    {
                        id: 2,
                        username: "happyMom",
                        comment: "Good quality for the price.",
                        rating: 4,
                    },
                ],
                createdAt: "2024-05-15T12:00:00Z",
                selectedColor: "red",
                selectedSize: "S",
                quantity: 1,
                totalPrice: 24.99,
            },
            {
                id: 103,
                gender: "Men",
                title: "Kids' Hoodie",
                rating: 4.3,
                price: 24.99,
                description:
                    "This hoodie is cozy and perfect for kids. Made with soft fabric to keep them warm and comfortable.",
                colors: ["red", "yellow", "blue"],
                category: "Hoodies",
                img: [
                    "/images/men/hoodie.webp",
                    "/images/men/t-shirt-cat.webp",
                    "/images/men/t-shirt.webp",
                ],
                stock: {
                    XS: 2,
                    S: 3,
                    M: 4,
                    L: 0,
                },
                reviews: [
                    {
                        id: 1,
                        username: "parent123",
                        comment: "My kid loves this hoodie!",
                        rating: 5,
                    },
                    {
                        id: 2,
                        username: "happyMom",
                        comment: "Good quality for the price.",
                        rating: 4,
                    },
                ],
                createdAt: "2024-05-15T12:00:00Z",
                selectedColor: "red",
                selectedSize: "M",
                quantity: 1,
                totalPrice: 24.99,
            },
        ],
        totalPrice: 49.98,
        totalQuantity: 2,
        orderDate: "2025-04-8T13:38:12.924Z",
        user:defaultUser
    },
];
