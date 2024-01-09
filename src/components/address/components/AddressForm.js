"use client";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useDispatch } from "react-redux";
import { addNewAddress } from "@/app/redux/addressSlice";
import classes from "./AddressForm.module.scss";

const AddressForm = (props) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues
  } = useForm();

  const submitFormHandler = (data) => {
    // event.preventDefault();
    // event.stopPropegaton();
    console.log(data);
    // dispatch(addNewAddress({ data: [data] }));
    // if (props.closeFormHandler) {
    //   props.closeFormHandler();
    // }
    // return;
  };

  const onError = (errors, e) => console.log(errors, e)

  return (
    <>
    <form
      onSubmit={handleSubmit(submitFormHandler,onError)}
      className={classes["address-area"]}
    >
      <div className={classes["form"]}>
        <button
          type="button"
          className={classes["close-btn"]}
          onClick={props.closeFormHandler}
        >
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
        <button
          type="submit"
          // value="Save Address"
          className={classes["submit-btn"]}
          // onClick={()=>console.log(errors)}
          {...register("submitBtn")}
        >
          Save Address
        </button>
      </div>
    </form>
    <DevTool control={control} />
    </>
  );
};

export default AddressForm;
