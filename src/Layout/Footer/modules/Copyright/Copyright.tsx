import { useTranslation } from 'react-i18next';

import styles from './Copyright.module.scss';

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <p className={styles.copyright}>
      <span>&copy;</span>
      <span>{t('footer.copyright')}</span>
    </p>
  );
};

export default Copyright;
