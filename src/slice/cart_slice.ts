import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import product_list from '../const/product_list';

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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state,action:PayloadAction<string>){
        state.cart.push(action.payload);
        console.log(action.type,'11111111111111111111');

        console.log(action.payload,'11111111111111111111');
        
    }
  },
});

export default cartSlice.reducer;
export const {addProduct} = cartSlice.actions;
