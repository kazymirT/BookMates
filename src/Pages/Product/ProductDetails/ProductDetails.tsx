import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ProductAuthors from './components/ProductAuthors';
import ProductCharacteristics from './components/ProductCharacteristics';
import { ProductDetailsProps } from './type';
import SectionDescription from '../components/SectionDescription/SectionDescription';
import styles from '../Product.module.scss';

const ProductDetails: FC<ProductDetailsProps> = ({ book }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.book}>
      <div className={styles.info}>
        <h2>{book.title}</h2>
        <ProductAuthors authors={book.authors} />
      </div>

      <div className={styles.details}>
        <SectionDescription title={t('product.characteristics')}>
          <ProductCharacteristics book={book} />
        </SectionDescription>
        <SectionDescription title={t('product.description')}>
          <p className={styles.description}>{book.description}</p>
        </SectionDescription>
      </div>
    </div>
  );
};

export default ProductDetails;
