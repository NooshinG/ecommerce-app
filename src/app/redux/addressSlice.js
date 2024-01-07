"use client";

import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_ADDRESS_KEY = "ADDRESS";

const addressLocalStorage = localStorage.getItem(LOCAL_STORAGE_ADDRESS_KEY);
const initialState =
  addressLocalStorage && JSON.parse(addressLocalStorage).list.length > 0
    ? {
        deliverAddress: JSON.parse(addressLocalStorage).deliverId
          ? JSON.parse(addressLocalStorage).deliverId
          : JSON.parse(addressLocalStorage).list[0].id,
        addressList: JSON.parse(addressLocalStorage).list,
      }
    : {
        deliverAddress: null,
        addressList: [],
      };

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addNewAddress: (state, action) => {
      state.addressList = state.addressList.concat([
        {
          ...action.payload.data[0],
          id: crypto.randomUUID(),
        },
      ]);

      if (!state.deliverAddress) {
        state.deliverAddress = state.addressList[0].id;
      }

      localStorage.setItem(
        LOCAL_STORAGE_ADDRESS_KEY,
        JSON.stringify({
          deliverId: state.deliverAddress,
          list: [...state.addressList],
        })
      );
    },

    setDeliveryAddress: (state, action) => {
      state.deliverAddress = action.payload.id;
      localStorage.setItem(
        LOCAL_STORAGE_ADDRESS_KEY,
        JSON.stringify({
          deliverId: state.deliverAddress,
          list: state.addressList,
        })
      );
    },
  },
});

export const { addNewAddress, setDeliveryAddress } = addressSlice.actions;
const addressReducer = addressSlice.reducer;
export default addressReducer;
