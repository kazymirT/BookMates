import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import CategoryIntro from './CategoryIntro/CategoryIntro';
import styles from './Collection.module.scss';
import Filters from '../Catalog/Filters/Filters';
import Products from '../Catalog/Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';
import { COLLECTION } from '@/utils/fake';

const Collection = () => {
  const { collectionId } = useParams<{ collectionId: string }>();

  const { t } = useTranslation();

  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.collections'), {
    name: collectionId ? COLLECTION[collectionId].title : '',
    to: '/',
  });

  return (
    <section className={styles.collection}>
      <div className="container">
        <div className={styles['collection-wrapper']}>
          <Breadcrumbs options={breadcrumbs} />
          {collectionId && (
            <CategoryIntro
              descriptions={COLLECTION[collectionId].description}
              title={COLLECTION[collectionId].title}
            />
          )}
          <Filters />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Collection;
