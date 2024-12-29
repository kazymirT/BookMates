import { useTranslation } from 'react-i18next';

import styles from './Subscribe.module.scss';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';

const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.subscribe}>
      <h3>{t('user.settings.subscribe')}</h3>
      <div>
        <Checkbox variant="green" type="checkbox">
          <p>{t('user.settings.subscribeDescription')}</p>
        </Checkbox>
      </div>
    </div>
  );
};

export default Subscribe;
