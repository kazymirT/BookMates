import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorsCard.module.scss';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';

export interface AuthorCardProps {
  id: number;
  img: string;
  title: string;
}

const AuthorCard: FC<AuthorCardProps> = ({ id, img, title }) => {
  return (
    <Link to={`${id}`} className={styles.card}>
      <img src={img} alt={title} width={233} height={330} />
      <div>
        <h4>{title}</h4>
        <ButtonLink
          buttonType={ButtonType.Button}
          size={Sizes.RedS}
          text="Книги автора"
          url="/"
          variant={Variant.White}
        />
      </div>
    </Link>
  );
};

export default AuthorCard;
