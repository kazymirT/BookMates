import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorsCard.module.scss';
import { AuthorCardProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';

const AuthorCard: FC<AuthorCardProps> = ({ id, img, title }) => {
  return (
    <Link to={`${id}`} className={styles.card}>
      <img src={img} alt={title} width={233} height={330} />
      <div className={styles.content}>
        <h4>{title}</h4>
        <Button
          buttonType={ButtonType.Button}
          size={Sizes.RedS}
          text="Книги автора"
          variant={Variant.White}
        />
      </div>
    </Link>
  );
};

export default AuthorCard;
