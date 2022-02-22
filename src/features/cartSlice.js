import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: localStorage.getItem("cartList")
    ? JSON.parse(localStorage.getItem("cartList"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity")
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: localStorage.getItem("cartTotalAmount")
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemPrice = action.payload.price;
      state.cartTotalAmount += Number(itemPrice);

      if (itemIndex >= 0) {
        state.cartList[itemIndex] = {
          ...state.cartList[itemIndex],
          cartQuantity: state.cartList[itemIndex].cartQuantity + 1,
        };
      } else {
        let newProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartList.push(newProductItem);
      }

      state.cartTotalQuantity++;

      localStorage.setItem(
        "cartTotalAmount",
        JSON.stringify(state.cartTotalAmount)
      );
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartList.findIndex(
        (item) => item.id === action.payload.id
      );

      const itemPrice = action.payload.price;
      state.cartTotalAmount -= Number(itemPrice);

      if (state.cartList[itemIndex].cartQuantity > 1) {
        state.cartList[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity--;
      } else if (state.cartList[itemIndex].cartQuantity === 1) {
        const newCartList = state.cartList.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartList = newCartList;
        state.cartTotalQuantity--;
      }

      localStorage.setItem(
        "cartTotalAmount",
        JSON.stringify(state.cartTotalAmount)
      );
      localStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
  },
});

export const { addToCart, removeFromCart, getTotalAmount } = cartSlice.actions;

export const selectCartList = (state) => state.cart.cartList;

export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export default cartSlice.reducer;
