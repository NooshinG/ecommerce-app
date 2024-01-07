"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewAddress } from "@/app/redux/addressSlice";
import classes from "./AddressForm.module.scss";

const AddressForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(addNewAddress({ data: [data] }));
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes["address-area"]}>
      <div className={classes["form"]}>
        <button type="button" className={classes["close-btn"]}>
          <svg>
            <use href="/icons.svg#svg-close_form" />
          </svg>
          <span>Add New Address</span>
        </button>
        <div className={`${classes["form__section"]} ${classes["form--text"]}`}>
          <h3 className={classes["section__title"]}>Contact Information</h3>
          <div className={classes["input__container"]}>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className={classes["input__container"]}>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              id="mobileNumber"
              type="text"
              placeholder="Enter Number"
              {...register("mobileNumber", {
                required: true,
                pattern: /^[0-9]*$/,
              })}
            />
          </div>
        </div>
        <div className={`${classes["form__section"]} ${classes["form--text"]}`}>
          <h3 className={classes["section__title"]}>Delivery Address</h3>
          <div className={classes["input__container"]}>
            <label htmlFor="street">Street Address</label>
            <input
              id="street"
              type="text"
              placeholder="Enter Address"
              {...register("street", { required: true })}
            />
          </div>
          <div className={classes["input__container"]}>
            <label htmlFor="state">State</label>
            <input
              id="state"
              type="text"
              placeholder="Enter State"
              {...register("state", { required: true })}
            />
          </div>
          <div className={classes["input__container"]}>
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="Enter City"
              {...register("city", { required: true })}
            />
          </div>
          <div className={classes["input__container"]}>
            <label htmlFor="pin">Pin Code</label>
            <input
              id="pin"
              type="text"
              placeholder="Enter Pin Code"
              {...register("pin", { required: true })}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Save Address"
          className={classes["submit-btn"]}
        />
      </div>
    </form>
  );
};

export default AddressForm;
