import styles from './Footer.module.scss';
import Copyright from './modules/Copyright/Copyright';
import Navigation from './modules/Navigation/Navigation';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Navigation />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
