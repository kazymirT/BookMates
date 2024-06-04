import { useParams } from 'react-router-dom';

import styles from './Product.module.scss';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/getCrumbs';

const Product = () => {
  const { categoryId, productId } = useParams();
  const crumbs = createBreadcrumbs('catalog', categoryId, productId);
  return (
    <div className={styles.product}>
      <Breadcrumbs options={crumbs} />
    </div>
  );
};

export default Product;
