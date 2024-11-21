import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ProductDetailsItem from './ProductDetailsItem';
import styles from '../../Product.module.scss';
import { ProductCharacteristicsProps } from '../type';

const ProductCharacteristics: FC<ProductCharacteristicsProps> = ({ book }) => {
  const { t } = useTranslation();
  return (
    <ul className={styles.list}>
      <ProductDetailsItem
        name={t('product.years')}
        link="/catalog?years="
        options={book.year}
      />
      <ProductDetailsItem
        name={t('product.language')}
        link="/catalog?language="
        options={book.languages}
      />
      <ProductDetailsItem
        name={t('product.cover')}
        options={[{ id: 1, name: 'Тверда' }]}
      />
      <ProductDetailsItem
        name={t('product.number-of-pages')}
        options={[{ id: 1, name: `288` }]}
      />
      <ProductDetailsItem
        name={t('product.categories')}
        link="/catalog?categories="
        options={book.categories}
      />
    </ul>
  );
};

export default ProductCharacteristics;
