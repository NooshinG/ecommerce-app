import { useState } from "react";
import DeliveryAddress from "./DeliveryAddress";
import { createPortal } from "react-dom";
import AddressList from "./AddressList";
import AddressForm from "./AddressForm";
import Backdrop from "@/components/ui/Backdrop";
import classes from "./SmallScreenAddressComponent.module.scss";

const SmallScreenAddressComponent = () => {
  const addressModal = document.querySelector("#overlays");
  const [showAddressInfo, setShowAddressInfo] = useState({
    isShowList: false,
    isShowForm: false,
  });

  const addressList = (
    <Backdrop>
      <div className={`${classes["padding-inline-default"]} ${classes.modal}`}>
        <div className={classes.header}>
          <span>Select Delivery Address</span>
          <button
            type="button"
            onClick={() => {
              setShowAddressInfo({
                isShowForm: true,
                isShowList: false,
              });
            }}
          >
            + Add Address
          </button>
        </div>
        <AddressList
          closeListModal={() => {
            setShowAddressInfo({
              isShowForm: false,
              isShowList: false,
            });
          }}
        />
      </div>
    </Backdrop>
  );

  const addressForm = (
    <Backdrop>
      <div
        className={`${classes["padding-inline-default"]} ${classes.formModal}`}
      >
        <AddressForm />
      </div>
    </Backdrop>
  );

  return (
    <>
      <DeliveryAddress
        showAddressList={() => {
          setShowAddressInfo({
            isShowForm: false,
            isShowList: true,
          });
        }}
      />
      {showAddressInfo.isShowList && createPortal(addressList, addressModal)}
      {showAddressInfo.isShowForm && createPortal(addressForm, addressModal)}
    </>
  );
};

export default SmallScreenAddressComponent;
