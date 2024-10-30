import { useTranslation } from 'react-i18next';

import BookCategory from './BookCategory/BookCategory';
import styles from './Catalog.module.scss';
import CategoryIntro from './CategoryIntro/CategoryIntro';
import Filters from './Filters/Filters';
import HitOffers from './HitOffers/HitOffers';
import Products from './Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useAppSelector } from '@/redux/hooks';
import { queryAllData } from '@/redux/slices/queryParams';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';
import { category } from '@/utils/fake';

const Catalog = () => {
  const { t } = useTranslation();
  const {
    filter: { categories },
  } = useAppSelector(queryAllData);
  const breadcrumbs = createBreadcrumbs(
    t('breadcrumbs.catalog'),
    categories[0]
  );

  return (
    <section className={styles.catalog}>
      <div className="container">
        <div className={styles['catalog-wrapper']}>
          <Breadcrumbs options={breadcrumbs} />
          {!categories.length ? (
            <>
              <HitOffers />
              <BookCategory />
            </>
          ) : (
            <CategoryIntro descriptions={category} title={categories[0].name} />
          )}
          <Filters />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
