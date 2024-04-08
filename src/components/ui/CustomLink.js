
import Link from "next/link";
import classes from './CustomLink.module.scss'

const CustomLink = ({ title, url }) => {
  return (
    <Link href={url} className={classes['custom-link']}>
      <svg>
        <use href="/icons.svg#chevron-left" />
      </svg>
      <span>{title}</span>
    </Link>
  );
};

export default CustomLink;
