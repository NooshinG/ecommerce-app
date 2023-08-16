import Card from '../ui/card';
import classes from './WebApp.module.scss'

const WebApp = () => {
  return (
    
    <Card className={classes['app__container']}>
      <Card className={classes['app__img']}>
        <img src="/phone.svg" />
      </Card>
      <p className={classes['text__title--medium']}>Discover your favrouite products faster with CORA’L web app.</p>
      <h3>{`Add Shortcut ${"->"}`}</h3>
    </Card>
  );
};

export default WebApp;
