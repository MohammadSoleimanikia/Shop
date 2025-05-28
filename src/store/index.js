import  productReducer from "./products";
import  cartReducer from "./cart";
import userReducer from './user';
import orderReducer from "./orders"
import dashboardReducer from "./dashboard"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        user:userReducer,
        order:orderReducer,
        dashboard:dashboardReducer
    }
});
export default store;