"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryAddress, removeAddress } from "@/app/redux/addressSlice";
import classes from "./AddressList.module.scss";

const AddressList = (props) => {
  const { deliverAddress, addressList } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const DeliveryAddressHandler = (val) => {
    dispatch(setDeliveryAddress({ id: val }));
  };

  const removeAddressHandler = (val) => {
    dispatch(removeAddress({ id: val }));
  };

  const { register, getValues, reset, resetField, setValue } = useForm({
    mode: "onChange",
    // defaultValues: {
    //   addressList: deliverAddress,
    // },
  });

  return (
    <form
      className={classes.form}
      defaultValue={deliverAddress}
      onChange={() => {
        DeliveryAddressHandler(getValues("addressList"));
        if (props.closeListModal) {
          props.closeListModal();
        }
      }}
    >
      {React.Children.toArray(
        addressList.map((item) => {
          return (
            <label htmlFor={item.id} className={classes.label}>
              <input
                type="radio"
                value={item.id}
                id={item.id}
                checked={deliverAddress == item.id}
                {...register(`addressList`)}
              />

              <span className={classes["info__container"]}>
                <span className={classes.info}>
                  <span>{item.fullName}</span>
                  <span>{`${item.street} ${item.city} ${item.state}`}</span>
                  <span>{item.mobileNumber}</span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    removeAddressHandler(item.id);
                    // dispatch(removeAddress({ id: item.id }));
                    // resetField("addressList", { defaultValue: deliverAddress });
                  }}
                >
                  <svg>
                    <use href="/icons.svg#delete-small" />
                  </svg>
                </button>
              </span>
            </label>
          );
        })
      )}
    </form>
  );
};

export default AddressList;
