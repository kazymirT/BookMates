import Skeleton from 'react-loading-skeleton';

import { InlineWrapperWithMargin } from './ProductDetails';
import styles from '../Product.module.scss';

const ProductDetailItem = ({
  title,
  value,
  children,
}: {
  title: string;
  value?: string | number;
  children?: JSX.Element;
}) => (
  <div>
    <h3>{title}</h3>
    {!value && !children ? (
      <Skeleton
        containerClassName="flex-1"
        width={155}
        height={41}
        count={1}
        inline
        wrapper={InlineWrapperWithMargin}
      />
    ) : value ? (
      <p className={styles.item}>{value}</p>
    ) : (
      children
    )}
  </div>
);

export default ProductDetailItem;
