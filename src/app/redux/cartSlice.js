"use client";

import { createSlice } from "@reduxjs/toolkit";
import { setCookies, getCookie } from "@/lib/cookies";

const initialCookie = getCookie("cart");

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
    addToCart: (state, action) => {
      let idx = -1;
      state.items.forEach((item, index) => {
        if (item.name === action.payload.name) {
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
      setCookies("cart", JSON.stringify(state), 7);
    },
  },
});

export const { addToCart } = counterSlice.actions;

const cartReducer = counterSlice.reducer;

export default cartReducer;
