import  productReducer from "./products";
import  cartReducer from "./cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
});
export default store;