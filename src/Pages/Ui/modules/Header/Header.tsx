import Bottom from './components/Bottom';
import HeaderTop from './components/Top';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles['header-inner']}>
          <HeaderTop />
          <Bottom />
        </div>
      </div>
    </header>
  );
};

export default Header;
