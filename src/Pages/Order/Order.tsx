import { useTranslation } from 'react-i18next';

import styles from './Order.module.scss';
import OrderForm from './OrderForm';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Order = () => {
  const { t } = useTranslation();
  const breadCrumbs = createBreadcrumbs(t('breadcrumbs.order'));

  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles['order-container']}>
          <Breadcrumbs options={breadCrumbs} />
          <section className={styles.main}>
            <h2>{t('order.title')}</h2>
            <OrderForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Order;
