import { useEffect } from 'react';

import styles from './Catalog.module.scss';
import CatalogHeader from './CatalogHeader/CatalogHeader';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useAppDispatch } from '@/redux/hooks';
import { initializeState } from '@/redux/slices/queryParams';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';
import { initializeQueryState } from '@/utils/initializeQueryState';

const Catalog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newState = initializeQueryState();
    dispatch(initializeState(newState));
  }, [dispatch]);

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
