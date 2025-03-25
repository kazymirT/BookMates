import { skipToken } from '@reduxjs/toolkit/query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import styles from './Product.module.scss';
import ProductControl from './ProductControl/ProductControl';
import ProductDetails from './ProductDetails/ProductDetails';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import ProductCard from '@/components/ProductCard/ProductCard';
import SkeletonProductCard from '@/components/Skeleton/SkeletonProductCard';
import SkeletonProductPage from '@/components/Skeleton/SkeletonProductPage';
import Slider from '@/components/Slider/Slider';
import Subscription from '@/components/Subscription/Subscription';
import { PRODUCT_OF_SLIDER } from '@/constants/slider';
import {
  useGetBookByIdQuery,
  useGetBooksQuery,
} from '@/redux/services/booksNew';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';

const Product = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const { data: books, isLoading: isLoadingSlide } = useGetBooksQuery({
    limit: `${PRODUCT_OF_SLIDER}`,
    lang,
  });
  const { productId } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(
    productId ? { id: productId, lang: lang } : skipToken
  );
  const breadcrumbs = createBreadcrumbs(
    t('breadcrumbs.catalog'),
    book && {
      name: book.categories[0],
      to: `/catalog?categories=${book.categories[0]}&page=1`,
    }
  );
  return (
    <div className={styles.product}>
      <div className="container">
        <div className={styles['product__inner']}>
          <Breadcrumbs options={breadcrumbs} activeLastLink />
          {book && (
            <section className={styles['details-product']}>
              <div className={styles['img-box']}>
                <img
                  src={book.image}
                  alt={book && book.title}
                  width={270}
                  height={406}
                />
              </div>
              <ProductDetails book={book} />
              <ProductControl book={book} />
            </section>
          )}
          {isLoading && <SkeletonProductPage />}
          <section className={styles.likes}>
            <h3 className={styles.title}>{t('product.offers')}</h3>
            <Slider sliderCL="slider-section" arrows>
              {books &&
                books.data.map((book) => (
                  <ProductCard key={book.id} data={book} variant="slider" />
                ))}
              {isLoadingSlide &&
                Array.from({ length: PRODUCT_OF_SLIDER }).map((_, i) => (
                  <SkeletonProductCard key={i} variant="slider" />
                ))}
            </Slider>
          </section>
          <Subscription variant={'author'} />
        </div>
      </div>
    </div>
  );
};

export default Product;
