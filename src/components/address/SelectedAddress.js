import classes from "./SelectedAddress.module.scss";

const SelectedAddress = ({ Address }) => {
  const addressInfo = Address ? (
    <>
      <h3>{Address.fullName}</h3>
      <p>{`${Address.pin} ${Address.street}, ${Address.city}`}</p>
    </>
  ) : (
    <h3 className={classes['empty__title']}>Choose Address</h3>
  );

  return (
    <div className={classes["address__container"]}>
      <div className={classes["info__container"]}>{addressInfo}</div>
      <button type="button" className={classes.btn}>
        <svg>
          <use href="/icons.svg#svg-pencil" />
        </svg>
      </button>
    </div>
  );
};

export default SelectedAddress;
