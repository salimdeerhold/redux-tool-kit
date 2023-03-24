import { createSlice } from "@reduxjs/toolkit"
import product_list from "../src/const/product_list";

const initialState = {
    cart:[],
    items : product_list,
    totalQuantity : 0,
    totalPrice:0,
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},

});

export default cartSlice.reducer;