import { useTranslation } from 'react-i18next';

import styles from './Authors.module.scss';
import Filters from './modules/Filters/Filters';
import Results from './modules/Results/Results';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Authors = () => {
  const { t } = useTranslation();

  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.authors'));
  return (
    <section className={styles.authors}>
      <div className="container">
        <div className={styles['authors__inner']}>
          <Breadcrumbs options={breadcrumbs} />
          <h3>{t('authors.title')}</h3>
          <Filters />
          <Results />
        </div>
      </div>
    </section>
  );
};

export default Authors;
