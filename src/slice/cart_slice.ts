import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import product_list from '../const/product_list';

interface CartInterface {
  cartItem:any[];
  items:any;
  totalQuantity: number;
  totalPrice: number;
}
const initialState: CartInterface = {
  cartItem: [],
  items: product_list,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state,action:PayloadAction<any>){
        const product = action.payload;
        //state.cart.push(action.payload);
        state.cartItem.push(product);
        console.log(action.payload,'11111111111111111111');
        state.totalQuantity +=  product.quantity;
        state.totalPrice += product.itemTotalPrice;
    }
  },
});

export default cartSlice.reducer;
export const {addProduct} = cartSlice.actions;
