import styles from './Catalog.module.scss';
import CatalogHeader from './CatalogHeader/CatalogHeader';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Catalog = () => {
  const breadcrumbs = createBreadcrumbs('catalog');

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-container']}>
          <Breadcrumbs options={breadcrumbs} activeLastLink={false} />
          <CatalogHeader />
          <div className={styles.main}>
            <Filters />
            <Products />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
