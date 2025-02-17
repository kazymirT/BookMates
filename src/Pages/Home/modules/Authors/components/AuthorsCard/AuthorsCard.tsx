import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorsCard.module.scss';
import { type AuthorCardProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';

const AuthorCard: FC<AuthorCardProps> = ({ id, img, title }) => {
  return (
    <Link to={`/author/${id}`} className={styles.card}>
      <img src={img} alt={title} width={233} height={330} loading="lazy" />
      <div className={styles.content}>
        <h4>{title}</h4>
        <Button
          type="button"
          size={Sizes.RedS}
          text="Книги автора"
          variant={Variant.White}
        />
      </div>
    </Link>
  );
};

export default AuthorCard;
