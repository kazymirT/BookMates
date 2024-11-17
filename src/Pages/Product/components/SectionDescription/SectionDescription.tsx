import { FC } from 'react';

import styles from './SectionDescription.module.scss';
import { SectionDescriptionProps } from './types';

const SectionDescription: FC<SectionDescriptionProps> = ({
  children,
  title,
}) => {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SectionDescription;
