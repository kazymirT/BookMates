import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import { FACE_USER } from '@/Pages/User/data';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const Contacts = () => {
  const { user } = useAppSelector(userData);
  const { t } = useTranslation();
  return (
    <>
      {FACE_USER && (
        <>
          <ul className={styles.list}>
            <li>
              <span className={styles.item}>{t('user.contact.phone')}</span>
              <span className={styles.data}>{FACE_USER.phone}</span>
            </li>
            <li>
              <span className={styles.item}>{t('user.contact.email')}</span>
              <span className={styles.data}>{user?.email ?? '-'}</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Contacts;
