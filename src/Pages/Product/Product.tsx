import styles from './Product.module.scss';
import ProductControl from './ProductControl/ProductControl';
import ProductDetails from './ProductDetails/ProductDetails';
import Slider from './Slider/Slider';
import Breadcrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import { createBreadcrumbs } from '@/utils/createBreadcrumbs';
import { book } from '@/utils/fake';

const Product = () => {
  const crumbs = createBreadcrumbs('catalog', book.categories, book.title);

  return (
    <div className={styles.product}>
      <div className="container1200">
        <Breadcrumbs options={crumbs} />
        <section className={styles['details-product']}>
          <div className={styles['img-box']}>
            <img
              src={book.image.src}
              alt={book.image.name}
              width={282}
              height={328}
            />
          </div>
          <ProductDetails book={book} />
          <ProductControl price={book.price} />
        </section>
        <section className={styles.likes}>
          <h3>Вам може сподобатись</h3>
          <Slider />
        </section>
      </div>
    </div>
  );
};

export default Product;
