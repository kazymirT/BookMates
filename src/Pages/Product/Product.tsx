import { skipToken } from '@reduxjs/toolkit/query';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

import styles from './Product.module.scss';
import ProductControl from './ProductControl/ProductControl';
import ProductDetails from './ProductDetails/ProductDetails';
import Slider from './Slider/Slider';
import book1 from '@/assets/images/fake/book1.png';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { useGetBookByIdQuery } from '@/redux/services/books';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Product = () => {

  const { productId } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(productId ?? skipToken);
  const breadcrumbs = createBreadcrumbs('catalog', book?.categories[0]);

  return (
    <div className={styles.product}>
      <div className="container">
        {isLoading ? (
          <Skeleton width={300} height={19} />
        ) : (
          <Breadcrumbs options={breadcrumbs} activeLastLink />
        )}
        {
          <section className={styles['details-product']}>
            <div className={styles['img-box']}>
              {isLoading ? (
                <Skeleton width={282} height={328} />
              ) : (
                <img
                  src={!book?.image ? book1 : book.image.contentType}
                  alt={book && book.title}
                  width={282}
                  height={328}
                />
              )}
            </div>
            <ProductDetails book={!isLoading ? book : undefined} />
            <ProductControl price={!isLoading ? book?.price : undefined} />
          </section>
        }
        <section className={styles.likes}>
          <h3>Вам може сподобатись</h3>
          <Slider />
        </section>
      </div>
    </div>
  );
};

export default Product;
