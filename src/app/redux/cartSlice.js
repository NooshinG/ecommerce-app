"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialCookie = localStorage.getItem("cart");

const initialState = initialCookie
  ? JSON.parse(initialCookie)
  : {
      totalAmount: 0,
      totalQuantity: 0,
      discount: 0,
      items: [],
    };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.discount = 0;
      state.items = [];
      localStorage.removeItem("cart");
    },
    remove: (state, action) => {
      let qty = 0;
      let totalPrice = 0;
      let idx = -1;
      state.items.forEach((item, index) => {
        if (item.id == action.payload.id) {
          idx = index;
          qty = item.qty;
          totalPrice = item.qty * item.unitPrice;
        }
      });

      // console.log(idx)

      state.totalAmount =
        Math.round((state.totalAmount - totalPrice) * 100) / 100;
      state.totalQuantity = state.totalQuantity - qty;
      state.items.splice(idx, 1);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    addToCart: (state, action) => {
      let idx = -1;
      state.items.forEach((item, index) => {
        if (item.id === action.payload.id) {
          idx = index;
        }
      });

      if (idx >= 0) {
        state.items[idx].qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }

      state.totalAmount = 0;
      state.totalQuantity = 0;

      state.items.forEach((item) => {
        state.totalAmount += item.qty * item.unitPrice;
        state.totalQuantity += item.qty;
      });

      state.totalAmount = Math.round(state.totalAmount * 100) / 100;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, remove, clearCart } = counterSlice.actions;

const cartReducer = counterSlice.reducer;

export default cartReducer;
