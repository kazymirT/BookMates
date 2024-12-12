import styles from './Home.module.scss';
import Authors from './modules/Authors/Authors';
import Banner from './modules/Banner/Banner';
import Collections from './modules/Collections/Collections';
import Newness from './modules/Newness/Newness';
import Sale from './modules/Sale/Sale';
import Subscription from '../../components/Subscription/Subscription';

const Home = () => {
  return (
    <>
      <Banner />
      <div className={styles.home}>
        <Newness />
        <Sale />
        <Collections />
        <Authors />
        <Subscription variant="home" />
      </div>
    </>
  );
};

export default Home;
