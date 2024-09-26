import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { InlineWrapperWithMargin } from './ProductDetails';
import styles from '../Product.module.scss';
import { Attributes } from '@/redux/services/services.types';

const ProductDetailItems = ({
  title,
  options,
  link,
}: {
  title: string;
  link: string;
  options?: Attributes[];
}) => (
  <div>
    <h3>{title}</h3>
    <div className={styles.categories}>
      {options ? (
        options.map((option) => (
          <Link
            key={option.id}
            className={styles.item}
            to={`${link}${option.id}`}
          >
            {option.name}
          </Link>
        ))
      ) : (
        <Skeleton
          containerClassName="flex-1"
          width={155}
          height={41}
          count={3}
          inline
          wrapper={InlineWrapperWithMargin}
        />
      )}
    </div>
  </div>
);

export default ProductDetailItems;
