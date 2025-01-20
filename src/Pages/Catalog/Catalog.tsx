import { useTranslation } from 'react-i18next';

import styles from './Catalog.module.scss';
import BookCategory from './modules/BookCategory/BookCategory';
import Filters from './modules/Filters/Filters';
import HitOffers from './modules/HitOffers/HitOffers';
import Products from './modules/Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useAppSelector } from '@/redux/hooks';
import { queryAllData } from '@/redux/slices/queryParams';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const { t } = useTranslation();
  const {
    filter: { categories },
  } = useAppSelector(queryAllData);

  const breadcrumbs = createBreadcrumbs(
    t('breadcrumbs.catalog'),
    categories && categories.length > 0 && categories[0].name
      ? {
          name: categories[0].name,
          to: `/`,
        }
      : undefined
  );

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-wrapper']}>
          <Breadcrumbs options={breadcrumbs} />
          <HitOffers />
          <BookCategory />
          <Filters />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
