"use client";

import { useForm } from "react-hook-form";
import React from "react";
import classes from "./AddressList.module.scss";

const AddressList = ({ SavedAddress, selectAddressHandler }) => {
  const {
    register,
    getValues,
    // handleSubmit,
    // formState: { errors },
    // watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      addressList: "0",
    },
  });

  return (
    <form
      className={classes.form}
      onChange={() => selectAddressHandler(getValues("addressList"))}
    >
      {React.Children.toArray(
        SavedAddress.map((item, index) => {
          return (
            <label htmlFor={`address${index}`} className={classes.label}>
              <input
                type="radio"
                value={index}
                id={`address${index}`}
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
