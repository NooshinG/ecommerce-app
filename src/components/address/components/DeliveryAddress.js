"use client";

import { useSelector } from "react-redux";
import classes from "./DeliveryAddress.module.scss";

const DeliveryAddress = (props) => {
  const addressInfo = useSelector((state) => state.address);
  let deliveryInfo = null;

  if (addressInfo.deliverAddress) {
    deliveryInfo = addressInfo.addressList.filter(
      (item) => item.id == addressInfo.deliverAddress
    );
  }

  const content = addressInfo.deliverAddress ? (
    <>
      <h3>{deliveryInfo[0].fullName}</h3>
      <p>{`${deliveryInfo[0].pin} ${deliveryInfo[0].street}, ${deliveryInfo[0].city}`}</p>
    </>
  ) : (
    <h3 className={classes["empty__title"]}>Choose Address</h3>
  );

  return (
    <div className={classes["address__container"]}>
      <div className={classes["info__container"]}>{content}</div>
      <button
        type="button"
        className={classes.btn}
        onClick={props.showAddressList}
      >
        <svg>
          <use href="/icons.svg#svg-pencil" />
        </svg>
      </button>
    </div>
  );
};

export default DeliveryAddress;
