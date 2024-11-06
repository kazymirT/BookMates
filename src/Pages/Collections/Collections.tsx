import { useTranslation } from 'react-i18next';

import styles from './Collections.module.scss';
import AllCollections from './modules/AllCollections/AllCollections';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Collections = () => {
  const { t } = useTranslation();

  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.collections'));
  return (
    <section className={styles.collections}>
      <div className="container">
        <div className={styles['collections__inner']}>
          <Breadcrumbs options={breadcrumbs} />
          <h3>{t('collections.title')}</h3>
          <AllCollections />
        </div>
      </div>
    </section>
  );
};

export default Collections;
