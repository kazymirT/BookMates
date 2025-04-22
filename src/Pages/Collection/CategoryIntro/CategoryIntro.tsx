import { FC } from 'react';

import styles from './CategoryIntro.module.scss';
import { CollectionInfo } from '@/redux/services/collections';

const CategoryIntro: FC<CollectionInfo> = ({
  descriptionOne,
  descriptionTwo,
  name,
}) => {
  return (
    <section className={styles.intro}>
      <h3>{name ?? 'Назва колекії'}</h3>
      <div className={styles.description}>
        <p>{descriptionOne}</p>
        <p>{descriptionTwo}</p>
      </div>
    </section>
  );
};

export default CategoryIntro;
