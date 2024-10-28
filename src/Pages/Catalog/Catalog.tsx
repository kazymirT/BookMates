import { useTranslation } from 'react-i18next';

import styles from './Catalog.module.scss';
// import CatalogHeader from './CatalogHeader/CatalogHeader';
// import Filters from './Filters/Filters';
import HitOffers from './HitOffers/HitOffers';
import Products from './Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const { t } = useTranslation();
  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.catalog'));

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-wrapper']}>
          <Breadcrumbs options={breadcrumbs} />
          <HitOffers />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
