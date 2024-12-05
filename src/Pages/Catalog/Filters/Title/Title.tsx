import classNames from 'classnames';
import { FC } from 'react';

import styles from './Title.module.scss';
import { TitleProps } from './types';

const Title: FC<TitleProps> = ({ icon, isOpen, text, toggleOpen }) => {
  const titleCN = classNames(styles.title, {
    [styles['title__open']]: isOpen,
    [styles['title__close']]: !isOpen,
  });
  return (
    <div className={titleCN} onClick={toggleOpen}>
      {text && <h3>{text}</h3>}
      {icon && icon}
    </div>
  );
};

export default Title;
