import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorItem.module.scss';
import { AuthorItemProps } from './types';

const AuthorItem: FC<AuthorItemProps> = ({
  author: { bookCount, id, name },
}) => {
  return (
    <Link to={`/author/${id}`} className={styles.link}>
      {name} <span>({bookCount})</span>
    </Link>
  );
};

export default AuthorItem;
