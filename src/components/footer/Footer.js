import classes from "./Footer.module.scss";

const Footer = () => {
  const categories = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellary",
  ].map((item) => <li>{item}</li>);

  return (
    <div className={classes["footer__container"]}>
      <div className={classes["more-info"]}>
        <h2 className={classes["text__title--medium"]}>More about CORA'L</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_2149_1642)">
            <path
              d="M4.5 15L12 7.5L19.5 15"
              stroke="#626262"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2149_1642">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={`${classes["footer"]} ${classes["grid"]}`}>
        <div>
          <h2 className={classes["text__title--medium"]}>Shop by Category</h2>
          <ul className={classes["flex-col-1"]}>{categories}</ul>
        </div>
        <div>
          <h2 className={classes["text__title--medium"]}>Policy</h2>
          <p>
            Return | Terms of use | Sitemap | Security | Privacy | EPR
            Compliance
          </p>
        </div>
        <div>
          <h2 className={classes["text__title--medium"]}>About</h2>
          <p>Contact Us | About Us | Careers | Press </p>
        </div>
        <div className={classes["break-line"]}></div>
        <div className={classes["flex-col-2"]}>
          <div className={classes["social-media"]}>
            <img src="/logos.svg" />
          </div>
          <div className={classes["location"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2149_1595)">
                <path
                  d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2149_1595">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>United states</p>
          </div>
          <div>
            <p>© 2021 | Cora Leviene All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
