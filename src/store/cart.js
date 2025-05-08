// features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import addCurrency from "@/utils/addCurrency";
import minusCurrency from "@/utils/minusCurrency";
const initialState = {
    items: [], // Each item: { id, title, price, quantity, img, etc. }
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Add item to cart
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;

            if (existingItem) {
                existingItem.quantity++;
                console.log(newItem.price);
                existingItem.totalPrice = addCurrency(
                    newItem.price,
                    existingItem.totalPrice
                );
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            // Update total price
            state.totalPrice = addCurrency(newItem.price, state.totalPrice);
        },

        // Remove item completely
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) return;

            state.totalQuantity -= existingItem.quantity;
            state.totalPrice = minusCurrency(
                state.totalPrice,
                existingItem.totalPrice
            );

            state.items = state.items.filter((item) => item.id !== id);
        },

        // Decrease item quantity
        decreaseQuantity(state, action) {
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (!item) return;

            item.quantity--;
            item.totalPrice = minusCurrency(item.totalPrice, item.price);
            state.totalQuantity--;
            state.totalPrice = minusCurrency(state.totalPrice, item.price);

            if (item.quantity === 0) {
                state.items = state.items.filter((i) => i.id !== id);
            }
        },

        // Clear entire cart
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
