"use client";

import { useState } from "react";
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";
import classes from "./index.module.scss";

const Address = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("address"))
      ? JSON.parse(localStorage.getItem("address"))
      : []
  );

  const [isShowAddressForm, setIsShowAddressForm] = useState(false);

  return (
    <div className={classes["address__container"]}>
      {data.length > 0 && <AddressList SavedAddress={data} />}
      <div>
        <button
          type="button"
          onClick={() => setIsShowAddressForm((prev) => !prev)}
        >
          {`${isShowAddressForm ? "-" : "+"} Add New Address`}
        </button>
      </div>
      {isShowAddressForm && (
        <AddressForm setAddress={(newAddress) => setData(newAddress)} />
      )}
    </div>
  );
};

export default Address;
