"use client";

import { useForm } from "react-hook-form";
import Accardion from "../../ui/Accardion";
import classes from "./PaymentForm.module.scss";
import { useState } from "react";

const PaymentForm = (props) => {
  const [formDefaultValue, setFormDefaultValue] = useState(props.data[0].id);
  const { register, handleSubmit, getValues } = useForm({
    mode: "onChange",
    // defaultValues: { paymentCard: props.data[0].id },
  });

  const onSubmit = () => {
    // event.preventDefault();
    setFormDefaultValue(getValues("paymentCard"));
  };

  const content = (
    <div className={classes["payment-area"]}>
      <Accardion title="Payments">
        <form
          className={classes.form}
          // defaultValue={formDefaultValue}
          onChange={onSubmit}
        >
          {props.data.map((card) => {
            return (
              <label key={card.id} htmlFor={card.id} className={classes.label}>
                <div className={classes["payment__info"]}>
                  <svg className={classes.logo}>
                    <use href={`/icons.svg#${card.image}`} />
                  </svg>
                  <h2 className={classes.title}>{card.title}</h2>
                </div>
                <input
                  type="radio"
                  value={card.id}
                  id={card.id}
                  checked={card.id == formDefaultValue}
                  {...register("paymentCard")}
                />
              </label>
            );
          })}
        </form>
      </Accardion>
    </div>
  );

  return content;
};

export default PaymentForm;
