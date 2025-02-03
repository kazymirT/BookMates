import { type FC } from 'react';

import styles from './Section.module.scss';
import { type SectionProps } from './types';

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles['section-inner']}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
