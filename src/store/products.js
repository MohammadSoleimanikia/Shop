import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "./PRODUCTITEM";

const initialState = {
    items: PRODUCTS
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
        },
    },
});
export default productSlice.reducer;
export const productsActions = productSlice.actions;
