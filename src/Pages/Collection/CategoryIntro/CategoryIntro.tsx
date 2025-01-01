import { FC } from 'react';

import styles from './CategoryIntro.module.scss';
import { CategoryIntroProps } from './types';
import { formatTextWithSpans } from '@/utils/formatTextWithSpans';

const CategoryIntro: FC<CategoryIntroProps> = ({ descriptions, title }) => {
  const text = formatTextWithSpans(descriptions);
  return (
    <section className={styles.intro}>
      <h3>{title}</h3>
      <div className={styles.description}>
        {text &&
          text.map((description, index) => <p key={index}>{description}</p>)}
      </div>
    </section>
  );
};

export default CategoryIntro;
