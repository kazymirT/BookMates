import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CategoryCard.module.scss';
import { CategoryCardProps } from '../SectionContent/SectionContent';

const CategoryCard: FC<CategoryCardProps> = ({ id, img, title }) => {
  return (
    <Link to={`${id}`} className={styles.card}>
      <img src={img} alt={title} width={220} height={200} />
      <div>
        <h4>{title}</h4>
      </div>
    </Link>
  );
};

export default CategoryCard;
