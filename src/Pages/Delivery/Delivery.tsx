import { useTranslation } from 'react-i18next';

import styles from './Delivery.module.scss';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Delivery = () => {
  const { t } = useTranslation();
  const breadcrumbs = createBreadcrumbs(t('breadcrumbs.delivery'));

  return (
    <section className={styles.delivery}>
      <div className="container">
        <div className={styles['delivery_inner']}>
          <Breadcrumbs options={breadcrumbs} />
          <section className={styles.welcome}>
            <h2>{t('delivery.welcome.title')}</h2>
            <article className={styles.article}>
              <p>{t('delivery.welcome.description1')}</p>
              <p>{t('delivery.welcome.description2')}</p>
              <p>{t('delivery.welcome.description3')}</p>
              <p className={styles.footer}>{t('delivery.welcome.footer')}</p>
            </article>
          </section>
          <section className={styles.delivery}>
            <h2>{t('delivery.delivery.title')}</h2>
            <div className={styles.wrapper}>
              <p>{t('delivery.delivery.delivery-title')}</p>
              <div className={styles.items}>
                <p>{t('delivery.delivery.delivery-item1')}</p>
                <p>{t('delivery.delivery.delivery-item2')}</p>
              </div>
              <div className={styles.subtitle}>
                <p>{t('delivery.delivery.description1')}</p>
                <p>{t('delivery.delivery.subtitle')}</p>
                <p>{t('delivery.delivery.description2')}</p>
                <p>{t('delivery.delivery.description3')}</p>
              </div>
              <p className={styles.last}>
                {t('delivery.delivery.description4')}
              </p>
            </div>
          </section>
          <section className={styles.pay}>
            <h2>{t('delivery.pay.title')}</h2>
            <div className={styles.title}>
              <p>{t('delivery.pay.subtitle1')}</p>
              <p>{t('delivery.pay.subtitle2')}</p>
            </div>
            <p className={styles.subtitle}>{t('delivery.pay.header')}</p>
            <article className={styles.credit}>
              <h3>{t('delivery.pay.subtitle3')}</h3>
              <p>{t('delivery.pay.description')}</p>
              <p>{t('delivery.pay.description1')}</p>
            </article>
            <article>
              <h3>{t('delivery.pay.subtitle4')}</h3>
              <p>{t('delivery.pay.description2')}</p>
            </article>
            <article className={styles.return}>
              <h3>{t('delivery.pay.subtitle5')}</h3>
              <p>{t('delivery.pay.description3')}</p>
              <div className={styles.items}>
                <div className={styles.item}>
                  <span className={styles.title}>
                    {t('delivery.pay.item-title1')}
                  </span>
                  <span>{t('delivery.pay.item-description1')}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.title}>
                    {t('delivery.pay.item-title2')}
                  </span>
                  <span>{t('delivery.pay.item-description2')}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.title}>
                    {t('delivery.pay.item-title3')}
                  </span>
                  <span>{t('delivery.pay.item-description3')}</span>
                </div>
              </div>
              <p className={styles.footer}>{t('delivery.pay.footer1')}</p>
              <p className={styles.footer}>{t('delivery.pay.footer2')}</p>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
