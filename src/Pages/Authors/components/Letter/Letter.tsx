import classNames from 'classnames';
import { FC, useState } from 'react';

import styles from './Letter.module.scss';
import { LetterProps } from './types';

const Letter: FC<LetterProps> = ({ letter }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleSetLetter = () => {
    setIsActive(!isActive);
  };
  const buttonCN = classNames(styles.letter, {
    [styles['letter__active']]: isActive,
  });
  return (
    <button className={buttonCN} type="button" onClick={toggleSetLetter}>
      {letter}
    </button>
  );
};

export default Letter;
