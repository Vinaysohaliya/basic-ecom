import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { quantity, description, id, price, name, image } = action.payload;
      
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += quantity;
      } else {
        state.cartItems.push({ quantity, description, id, price, name, image });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
