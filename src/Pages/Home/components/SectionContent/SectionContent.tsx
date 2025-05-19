import classNames from 'classnames';
import type { FC } from 'react';

import styles from './SectionContent.module.scss';
import type { SectionContentProps } from './types';

const SectionContent: FC<SectionContentProps> = ({ children, variant }) => {
  const contentClassNames = classNames(styles.content, {
    [styles[`content__${variant}`]]: variant,
  });
  return <div className={contentClassNames}>{children}</div>;
};

export default SectionContent;
