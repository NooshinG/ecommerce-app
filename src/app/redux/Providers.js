"use client";

import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./store";

const Providers = (props) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        {props.children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default Providers;
