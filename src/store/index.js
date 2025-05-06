import  productReducer from "./products";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        products:productReducer
    }
});
export default store;