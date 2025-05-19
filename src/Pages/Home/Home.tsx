import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import Authors from './modules/Authors/Authors';
import Banner from './modules/Banner/Banner';
import Collections from './modules/Collections/Collections';
import Newness from './modules/Newness/Newness';
import Sale from './modules/Sale/Sale';
import Subscription from '@/components/Subscription/Subscription';
import { useGetBooksForMainQuery } from '@/redux/services/main';

const Home = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const { data } = useGetBooksForMainQuery({ lang });
  return (
    <>
      <Banner />
      <div className={styles.home}>
        <Newness books={data?.news} />
        <Sale books={data?.sale} />
        <Collections collections={data?.collections} />
        <Authors authors={data?.authors} />
        <Subscription variant="home" />
      </div>
    </>
  );
};

export default Home;
