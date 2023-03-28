import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cart_slice";

const store = configureStore({
    reducer:{
        carts: cartSlice,
    },
});

export default store;
