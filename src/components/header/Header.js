import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={`${classes.header} ${classes.flex} `}>
      <div className={classes["flex__left-items"]}>
        <button className={classes["btn--border-none"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 12H20.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 6H14.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 18H20.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <h2 className={classes["text__display--small"]}>Home</h2>
      </div>
      <div className={classes["flex__right-items"]}>
        <button className={classes["btn--border-none"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_36_6)">
              <path
                d="M12 7.75736V16.2426"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2426 12H7.75732"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.0227 3.75H4.47727C4.07561 3.75 3.75 4.07561 3.75 4.47727V19.0227C3.75 19.4244 4.07561 19.75 4.47727 19.75H19.0227C19.4244 19.75 19.75 19.4244 19.75 19.0227V4.47727C19.75 4.07561 19.4244 3.75 19.0227 3.75Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_6">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className={classes["btn--border-none"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.875 4C7.07804 4 4 7.07804 4 10.875C4 14.672 7.07804 17.75 10.875 17.75C14.672 17.75 17.75 14.672 17.75 10.875C17.75 7.07804 14.672 4 10.875 4ZM2 10.875C2 5.97347 5.97347 2 10.875 2C15.7765 2 19.75 5.97347 19.75 10.875C19.75 15.7765 15.7765 19.75 10.875 19.75C5.97347 19.75 2 15.7765 2 10.875Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7363 15.7367C16.1268 15.3462 16.7599 15.3462 17.1505 15.7367L21.7068 20.293C22.0973 20.6835 22.0973 21.3167 21.7068 21.7072C21.3162 22.0977 20.6831 22.0977 20.2926 21.7072L15.7363 17.1509C15.3457 16.7604 15.3457 16.1272 15.7363 15.7367Z"
            />
          </svg>
        </button>
        <button className={classes["btn--border-none"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.26904 9.74994C5.2678 8.86045 5.44262 7.97951 5.78343 7.1579C6.12424 6.33628 6.6243 5.59025 7.25477 4.9628C7.88525 4.33535 8.63368 3.83889 9.45693 3.50204C10.2802 3.16519 11.1619 2.99461 12.0514 3.00013C15.7629 3.02772 18.7317 6.11275 18.7317 9.83468V10.4999C18.7317 13.8577 19.4342 15.8061 20.0529 16.871C20.1196 16.9848 20.1551 17.1142 20.1558 17.246C20.1565 17.3779 20.1224 17.5076 20.0569 17.6221C19.9915 17.7366 19.8971 17.8318 19.7831 17.8982C19.6691 17.9645 19.5397 17.9996 19.4078 17.9999H4.59222C4.46034 17.9996 4.33087 17.9645 4.21689 17.8981C4.1029 17.8318 4.00844 17.7366 3.94301 17.622C3.87759 17.5075 3.84352 17.3778 3.84425 17.2459C3.84498 17.114 3.88048 16.9846 3.94716 16.8709C4.56622 15.8059 5.26904 13.8575 5.26904 10.4999L5.26904 9.74994Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
