import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import CategoryIntro from './CategoryIntro/CategoryIntro';
import styles from './Collection.module.scss';
import Filters from '../Catalog/modules/Filters/Filters';
import Products from '../Catalog/modules/Products/Products';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useGetCollectionByIdQuery } from '@/redux/services/collections';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Collection = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';

  const { data: collection, isSuccess } = useGetCollectionByIdQuery(
    collectionId ? { collectionId, lang } : skipToken
  );
  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.collections'), {
    name: isSuccess ? 'Назва колекції' : '',
    to: '/',
  });

  return (
    <section className={styles.collection}>
      <div className="container">
        <div className={styles['collection-wrapper']}>
          <Breadcrumbs options={breadcrumbs} />
          {isSuccess && <CategoryIntro {...collection.collection} />}
          <Filters />
          <Products collectionId={collectionId} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
