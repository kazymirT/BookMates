import { NavLink } from 'react-router-dom';

import styles from './SaleItem.module.scss';
import { SaleBooksType } from '@/utils/fake';

type SaleItemType = {
  data: SaleBooksType;
};

const SaleItem = ({ data: { images, title } }: SaleItemType) => {
  return (
    <NavLink to={''} className={styles.sale}>
      <div className={styles['img-box']}>
        {images &&
          images.map((image, index) => (
            <img src={image} key={index} alt={title} />
          ))}
      </div>
      <h3>{title}</h3>
    </NavLink>
  );
};

export default SaleItem;
