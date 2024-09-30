import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import styles from './SaleItem.module.scss';
import { SaleBooksType } from '@/utils/fake';

type SaleItemType = {
  data: SaleBooksType;
};

const SaleItem = ({ data: { images, title } }: SaleItemType) => {
  const { t } = useTranslation();
  return (
    <NavLink to={''} className={styles.sale}>
      <div className={styles['img-box']}>
        {images &&
          images.map((image, index) => (
            <img src={image} key={index} alt="Book with sale" />
          ))}
      </div>
      <h3>{t('home.sales.sale', { value: title })}</h3>
    </NavLink>
  );
};

export default SaleItem;
