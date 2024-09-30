import { useTranslation } from 'react-i18next';

import SaleItem from './SaleItem/SaleItem';
import styles from './SaleProducts.module.scss';
import { saleBooks } from '@/utils/fake';

const SaleProducts = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.sale}>
      <div className="container">
        <div className={styles.headers}>
          <h2>{t('home.sales.title')}</h2>
        </div>
        <div className={styles.sales}>
          {saleBooks &&
            saleBooks.map((books) => <SaleItem data={books} key={books.id} />)}
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;
