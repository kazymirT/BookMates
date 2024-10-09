import Authors from './modules/Authors/Authors';
import Banner from './modules/Banner/Banner';
import Category from './modules/Category/Category';
import Newness from './modules/Newness/Newness';
import Sale from './modules/Sale/Sale';
import Subscription from './modules/Subscription/Subscription';
import styles from './Ui.module.scss';

const Ui = () => {
  return (
    <>
      <Banner />
      <div className={styles.ui}>
        <Newness />
        <Sale />
        <Category />
        <Authors />
        <Subscription />
      </div>
    </>
  );
};

export default Ui;
