import { useTranslation } from 'react-i18next';

import styles from './PersonalInfo.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const PersonalInfo = () => {
  const { t } = useTranslation();
  const { user } = useAppSelector(userData);
  return (
    <>
      {user && (
        <>
          <ul className={styles.list}>
            <li>
              <span className={styles.item}>{t('user.info.lastName')}</span>
              <span className={styles.data}>{user.lastName}</span>
            </li>
            <li>
              <span className={styles.item}>{t('user.info.firstName')}</span>
              <span className={styles.data}>{user.firstName}</span>
            </li>
            <li>
              <span className={styles.item}>
                {t('user.info.date-of-birth')}
              </span>
              <span className={styles.data}>-</span>
            </li>
            <li>
              <span className={styles.item}>{t('user.info.gender')}</span>
              <span className={styles.data}>-</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default PersonalInfo;
