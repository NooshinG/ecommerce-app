"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryAddress } from "@/app/redux/addressSlice";
import classes from "./AddressList.module.scss";

const AddressList = (props) => {
  const { deliverAddress, addressList } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const { register, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      addressList: deliverAddress,
    },
  });

  return (
    <form
      className={classes.form}
      onChange={() => {
        dispatch(setDeliveryAddress({ id: getValues("addressList") }));
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
                {...register("addressList")}
              />
              <span className={classes.info}>
                <span>{item.fullName}</span>
                <span>{`${item.street} ${item.city} ${item.state}`}</span>
                <span>{item.mobileNumber}</span>
              </span>
            </label>
          );
        })
      )}
    </form>
  );
};

export default AddressList;
