import classNames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './SectionContent.module.scss';

export interface CategoryCardProps {
  id: number;
  title: string;
  img: string;
}

export interface SectionContentProps {
  children: ReactNode;
  variant: 'authors' | 'category';
}
const SectionContent: FC<SectionContentProps> = ({ children, variant }) => {
  const contentClassNames = classNames(styles.content, {
    [styles[`content__${variant}`]]: variant,
  });
  return <div className={contentClassNames}>{children}</div>;
};

export default SectionContent;
