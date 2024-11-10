import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

import styles from './Product.module.scss';
import ProductControl from './ProductControl/ProductControl';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductSlider from '../Home/components/ProductSlider/ProductSlider';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import ProductCard from '@/components/ProductCard/ProductCard';
import { useGetBookByIdQuery, useGetBooksQuery } from '@/redux/services/books';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Product = () => {
  const { t } = useTranslation();
  const { productId } = useParams();
  const { data: books } = useGetBooksQuery({ size: '8' });
  const { data: book, isLoading } = useGetBookByIdQuery(productId ?? skipToken);
  const breadcrumbs = createBreadcrumbs(
    t('breadcrumbs.catalog'),
    book && {
      name: book.categories[0].name,
      to: `/catalog?categories=${book.categories[0].id}&page=1`,
    }
  );
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
                  src={book?.imageUrl}
                  alt={book && book.title}
                  width={282}
                  height={328}
                />
              )}
            </div>
            <ProductDetails book={!isLoading ? book : undefined} />
            <ProductControl book={book} />
          </section>
        }
        <section className={styles.likes}>
          <h3 className={styles.title}>{t('product.offers')}</h3>
          {books && (
            <ProductSlider
              sliderCL="slider-product"
              variant="product"
              slidesToScroll={2}
              isArrow
            >
              {books &&
                books.content.map((item) => (
                  <ProductCard key={item.id} data={item} variant="slider" />
                ))}
            </ProductSlider>
          )}
        </section>
      </div>
    </div>
  );
};

export default Product;
