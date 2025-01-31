import NavigationImages from './components/NavigationImages/NavigationImages';
import NavigationLinks from './components/NavigationLinks/NavigationLinks';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavigationLinks />
      <NavigationImages />
    </nav>
  );
};

export default Navigation;
