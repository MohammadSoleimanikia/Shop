const PRODUCTS = [
  {
    id: 101,
    gender: "Men",
    title: "Men's Graphic T-Shirt",
    rating: 4.2,
    price: 19.99,
    description: "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ["blue", "grey", "white"],
    category: "T-Shirts",
    img: [
      "/images/men/t-shirt-black.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt-cat.webp"
    ],
    stock: {
      S: 3,
      M: 5,
      L: 2,
      XL: 4
    },
    reviews: [
      {
        id: 1,
        username: "johnDoe",
        comment: "Great for casual wear, very comfortable.",
        rating: 4
      },
      {
        id: 2,
        username: "styleFan",
        comment: "Stylish and affordable.",
        rating: 5
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: 102,
    gender: "Women",
    title: "Women's Summer Dress",
    rating: 4.8,
    price: 29.99,
    description: "This summer dress is lightweight and perfect for warm weather. Made with breathable fabric for all-day comfort.",
    colors: ["pink", "white", "black"],
    category: "Dresses",
    img: [
      "/images/men/summer.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt.webp"
    ],
    stock: {
      XS: 2,
      S: 4,
      M: 3,
      L: 1,
      XL: 2
    },
    reviews: [
      {
        id: 1,
        username: "janeDoe",
        comment: "Perfect for summer, lightweight and stylish.",
        rating: 5
      },
      {
        id: 2,
        username: "fashionista",
        comment: "Love the design and comfort.",
        rating: 5
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: 103,
    gender: "Men",
    title: "Kids' Hoodie",
    rating: 4.3,
    price: 24.99,
    description: "This hoodie is cozy and perfect for kids. Made with soft fabric to keep them warm and comfortable.",
    colors: ["red", "yellow", "blue"],
    category: "Hoodies",
    img: [
      "/images/men/hoodie.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt.webp"
    ],
    stock: {
      XS: 2,
      S: 3,
      M: 4,
      L: 0
    },
    reviews: [
      {
        id: 1,
        username: "parent123",
        comment: "My kid loves this hoodie!",
        rating: 5
      },
      {
        id: 2,
        username: "happyMom",
        comment: "Good quality for the price.",
        rating: 4
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: 104,
    gender: "Men",
    title: "Men's Denim Jacket",
    rating: 4.7,
    price: 49.99,
    description: "This denim jacket is a classic wardrobe staple. Durable and stylish for any casual outing.",
    colors: ["blue", "black"],
    category: "Jackets",
    img: [
      "/images/men/denim.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt.webp"
    ],
    stock: {
      M: 2,
      L: 4,
      XL: 1,
      XXL: 3
    },
    reviews: [
      {
        id: 1,
        username: "outdoorGuy",
        comment: "Perfect for casual wear, very sturdy.",
        rating: 5
      },
      {
        id: 2,
        username: "styleLover",
        comment: "Comfortable and durable.",
        rating: 4
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: 105,
    gender: "Women",
    title: "Women's Cardigan",
    rating: 4.6,
    price: 34.99,
    description: "This cardigan is soft and cozy, perfect for layering during cooler weather.",
    colors: ["beige", "white", "black"],
    category: "Sweaters",
    img: [
      "/images/men/cardigan.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt.webp"
    ],
    stock: {
      S: 5,
      M: 2,
      L: 0,
      XL: 4
    },
    reviews: [
      {
        id: 1,
        username: "cozyFan",
        comment: "Great for layering, very comfortable.",
        rating: 5
      },
      {
        id: 2,
        username: "fashionFan",
        comment: "Stylish and warm.",
        rating: 4
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  },
  {
    id: 106,
    gender: "Unisex",
    title: "Unisex Sweatpants",
    rating: 4.1,
    price: 19.99,
    description: "These sweatpants are comfortable and versatile, perfect for lounging or casual outings.",
    colors: ["grey", "blue", "black"],
    category: "Pants",
    img: [
      "/images/men/sweatpant.webp",
      "/images/men/t-shirt-cat.webp",
      "/images/men/t-shirt.webp"
    ],
    stock: {
      S: 3,
      M: 2,
      L: 1,
      XL: 5
    },
    reviews: [
      {
        id: 1,
        username: "comfortSeeker",
        comment: "Affordable and comfortable for everyday wear.",
        rating: 4
      },
      {
        id: 2,
        username: "casualFan",
        comment: "Good quality for the price.",
        rating: 4
      }
    ],
    createdAt: "2024-05-15T12:00:00Z"
  }
];

export default PRODUCTS;
