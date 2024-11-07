import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorItem.module.scss';
export interface AuthorItemProps {
  author: {
    id: number;
    name: string;
    books: number;
  };
}
const AuthorItem: FC<AuthorItemProps> = ({ author: { books, id, name } }) => {
  return (
    <Link to={`/author/${id}`} className={styles.link}>
      {name} <span>({books})</span>
    </Link>
  );
};

export default AuthorItem;
