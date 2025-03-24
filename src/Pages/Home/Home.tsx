import styles from './Home.module.scss';
import Authors from './modules/Authors/Authors';
import Banner from './modules/Banner/Banner';
import Collections from './modules/Collections/Collections';
import Newness from './modules/Newness/Newness';
import Sale from './modules/Sale/Sale';
import Subscription from '../../components/Subscription/Subscription';
import { useGetBooksForMainQuery } from '@/redux/services/booksNew';

const Home = () => {
  const { data } = useGetBooksForMainQuery({ lang: 'ua' });
  return (
    <>
      <Banner />
      <div className={styles.home}>
        <Newness books={data?.news} />
        <Sale books={data?.sale} />
        <Collections />
        <Authors />
        <Subscription variant="home" />
      </div>
    </>
  );
};

export default Home;
