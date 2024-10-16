import { FC, ReactNode } from 'react';

import styles from './Section.module.scss';
export interface SectionProps {
  children: ReactNode;
}
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
