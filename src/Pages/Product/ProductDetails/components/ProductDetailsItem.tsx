import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Product.module.scss';
import { ProductDetailsItemProps } from '../type';

const ProductDetailsItem: FC<ProductDetailsItemProps> = ({
  name,
  link,
  options,
}) => {
  return (
    <li>
      <span>{name}</span>
      <div>
        {options.map(({ id, name }, index) => (
          <span key={id} className={styles.option}>
            {link ? (
              <Link to={`${link}${id}`}>{name}</Link>
            ) : (
              <span>{name}</span>
            )}
            {index < options.length - 1 && ', '}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ProductDetailsItem;
