import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import product_list from '../src/const/product_list';

interface CartInterface {
  cart:any[];
  items:any;
  totalQuantity: number;
  totalPrice: number;
}
const initialState: CartInterface = {
  cart: [],
  items: product_list,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state,action:PayloadAction<any>){
        state.cart.push(action.payload);
    }
  },
});

export default cartSlice.reducer;
export const {addProduct} = cartSlice.actions;
