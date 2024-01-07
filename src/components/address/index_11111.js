"use client";

import { useState } from "react";
import AddressList from "./components/AddressList";
import AddressForm from "./components/AddressForm";
import classes from "./index.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import { MEDIUM_SCREEN_SIZE } from "../../constants/global";
import Accardion from "../ui/Accardion";
// import DeliveryAddress from "./components/DeliveryAddress";
import { createPortal } from "react-dom";

const Address = () => {
  const { windowSize } = useWindowWidth();

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("address"))
      ? JSON.parse(localStorage.getItem("address"))
      : []
  );

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [isShowAddressForm, setIsShowAddressForm] = useState(false);

  const smallScreenAddressModal = document.querySelector("#address-modal");

  const componentContent = (
    <>
      {data.length > 0 && (
        <AddressList
          SavedAddress={data}
          selectAddressHandler={(idx) => setSelectedAddressIndex(idx)}
        />
      )}
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
    </>
  );

  const addressComponent = (
    <div className={classes["address__container"]}>
      {windowSize < MEDIUM_SCREEN_SIZE && (
        // <DeliveryAddress Address={data[selectedAddressIndex]} />
        <></>
      )}
      {windowSize < MEDIUM_SCREEN_SIZE
        ? createPortal(componentContent, smallScreenAddressModal)
        : componentContent}
    </div>
  );

  return windowSize < MEDIUM_SCREEN_SIZE ? (
    addressComponent
  ) : (
    <Accardion title="Select Delivery Address">{addressComponent}</Accardion>
  );
  //   return addressComponent;
};

export default Address;
