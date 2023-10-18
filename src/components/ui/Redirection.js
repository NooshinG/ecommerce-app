import Link from "next/link";
import classes from "./Button.module.scss";

const Redirection = (props) => {
  return (
    <Link href={props.path ? props.path : "/"} className={classes["button"]}>
      {props.children}
    </Link>
  );
};

export default Redirection;
