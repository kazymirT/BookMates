import { useTranslation } from 'react-i18next';

import styles from './Alphabet.module.scss';
import { alphabet } from '../../modules/Filters/data';
import Letter from '../Letter/Letter';

const Alphabet = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.alphabet}>
      {alphabet[t('authors.alphabet')][0].split('').map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default Alphabet;
