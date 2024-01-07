"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";
import classes from "./AddressComponent.module.scss";

const AddressComponent = () => {
  const { addressList } = useSelector((state) => state.address);

  const [isShowAddressForm, setIsShowAddressForm] = useState(false);

  return (
    <div className={classes.container}>
      {addressList.length > 0 && <AddressList />}
      <div>
        <button
          type="button"
          className={classes.btn}
          onClick={() => setIsShowAddressForm((prev) => !prev)}
        >
          {`${isShowAddressForm ? "-" : "+"} Add New Address`}
        </button>
      </div>
      {isShowAddressForm && <AddressForm />}
    </div>
  );
};

export default AddressComponent;
