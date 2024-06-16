import { skipToken } from '@reduxjs/toolkit/query';
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
  const { data: book, isFetching } = useGetBookByIdQuery(
    productId ?? skipToken
  );
  const breadcrumbs = createBreadcrumbs('catalog', book?.categories[0]);

  return (
    <div className={styles.product}>
      <div className="container">
        <Breadcrumbs options={breadcrumbs} activeLastLink />
        {!book && isFetching && <p>loading</p>}
        {book && (
          <section className={styles['details-product']}>
            <div className={styles['img-box']}>
              <img
                src={!book.image ? book1 : book.image.contentType}
                alt={book.title}
                width={282}
                height={328}
              />
            </div>
            <ProductDetails book={book} />
            <ProductControl price={book.price} />
          </section>
        )}

        <section className={styles.likes}>
          <h3>Вам може сподобатись</h3>
          <Slider />
        </section>
      </div>
    </div>
  );
};

export default Product;
