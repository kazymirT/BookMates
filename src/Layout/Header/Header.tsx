import styles from './Header.module.scss';
import HeaderStickyBar from './modules/HeaderStickyBar/HeaderStickyBar';
import HeaderTopBar from './modules/HeaderTopBar/HeaderTopBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles['header-inner']}>
          <HeaderTopBar />
          <HeaderStickyBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
