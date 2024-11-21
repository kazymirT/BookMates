import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Product.module.scss';
import { ProductAuthorsProps } from '../type';

const ProductAuthors: FC<ProductAuthorsProps> = ({ authors }) => {
  return (
    <div className={styles.authors}>
      {authors.map(({ id, name }) => (
        <Link to={`/author/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ProductAuthors;
