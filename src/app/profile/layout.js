import UserProfileSideNavigation from "@/components/userProfileSideNavigation";
import classes from './layout.module.scss'

export default function ProfileLayout({ children }) {
  return (
    <div className={classes['layout']}>
      <section>
        <UserProfileSideNavigation />
      </section>
      <section>{children}</section>
    </div>
  );
}
