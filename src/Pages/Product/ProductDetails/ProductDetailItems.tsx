import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { InlineWrapperWithMargin } from './ProductDetails';
import styles from '../Product.module.scss';
import { SORT_OPTIONS_URL } from '@/utils/constants';

const ProductDetailItems = ({
  title,
  options,
  link,
}: {
  title: string;
  link: string;
  options?: string[];
}) => (
  <div>
    <h3>{title}</h3>
    <div className={styles.categories}>
      {options ? (
        options.map((option) => (
          <Link
            key={option}
            className={styles.item}
            to={`${link}${title !== 'Рік видання' ? SORT_OPTIONS_URL[option] : option}`}
          >
            {option}
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
