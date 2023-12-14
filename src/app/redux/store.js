"use client";

import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = {
//   cart: cartReducer,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// const persistor = persistStore(store);

export default store;
