import classNames from 'classnames';
import { FC } from 'react';

import styles from './Title.module.scss';
export interface TitleProps {
  text: string;
  size?: 's' | 'm' | 'l' | 'full';
  textPosition?: 'center' | 'left';
}
const Title: FC<TitleProps> = ({
  text,
  size = 's',
  textPosition = 'center',
}) => {
  const titleCN = classNames(styles.title, {
    [styles[`title__${size}`]]: size,
    [styles[`title__${textPosition}`]]: textPosition,
  });
  return (
    <div className={titleCN}>
      <h3>{text}</h3>
    </div>
  );
};

export default Title;
