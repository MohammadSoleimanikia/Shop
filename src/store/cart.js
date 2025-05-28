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

            // Create a unique key combining id, size, and color (fall back to empty string if undefined)
            const itemKey = `${newItem.id}_${newItem.selectedSize || ""}_${newItem.selectedColor || ""}`;

            // Find item matching the id and selected options
            const existingItem = state.items.find(
                (item) =>
                    `${item.id}_${item.selectedSize || ""}_${item.selectedColor || ""}` ===
                    itemKey
            );

            state.totalQuantity++;

            if (existingItem) {
                existingItem.quantity++;
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

        removeFromCart(state, action) {
            const {
                id,
                selectedSize = "",
                selectedColor = "",
            } = action.payload;
            const itemKey = `${id}_${selectedSize}_${selectedColor}`;
            const existingItem = state.items.find(
                (item) =>
                    `${item.id}_${item.selectedSize || ""}_${item.selectedColor || ""}` ===
                    itemKey
            );
            if (!existingItem) return;

            state.totalQuantity -= existingItem.quantity;
            state.totalPrice = minusCurrency(
                state.totalPrice,
                existingItem.totalPrice
            );

            state.items = state.items.filter(
                (item) =>
                    `${item.id}_${item.selectedSize || ""}_${item.selectedColor || ""}` !==
                    itemKey
            );
        },

        decreaseQuantity(state, action) {
            const {
                id,
                selectedSize = "",
                selectedColor = "",
            } = action.payload;
            const itemKey = `${id}_${selectedSize}_${selectedColor}`;
            const item = state.items.find(
                (i) =>
                    `${i.id}_${i.selectedSize || ""}_${i.selectedColor || ""}` ===
                    itemKey
            );
            if (!item) return;

            item.quantity--;
            item.totalPrice = minusCurrency(item.totalPrice, item.price);
            state.totalQuantity--;
            state.totalPrice = minusCurrency(state.totalPrice, item.price);

            if (item.quantity === 0) {
                state.items = state.items.filter(
                    (i) =>
                        
                        `${i.id}_${i.selectedSize || ""}_${i.selectedColor || ""}` !==
                        itemKey
                );
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
