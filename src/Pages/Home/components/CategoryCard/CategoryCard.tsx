import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CategoryCard.module.scss';
import { CategoryCardProps } from '../SectionContent/SectionContent';

const CategoryCard: FC<CategoryCardProps> = ({ id, img, title }) => {
  return (
    <Link to={`/collection/${id}`} className={styles.card}>
      <img
        src={img}
        alt={'image for category'}
        width={220}
        height={200}
        loading="lazy"
      />
      <div>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default CategoryCard;
