import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import styles from './Order.module.scss';
import OrderForm from './OrderForm';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useAppSelector } from '@/redux/hooks';
import { goods } from '@/redux/slices/shoppingCartSlice';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Order = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const booksInCard = useAppSelector(goods);

  useEffect(() => {
    if (booksInCard.length === 0) {
      navigate('/catalog');
    }
  }, [booksInCard, navigate]);

  const breadCrumbs = createBreadcrumbs(t('breadcrumbs.order'));

  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles['order-container']}>
          <Breadcrumbs options={breadCrumbs} activeLastLink={false} />
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
