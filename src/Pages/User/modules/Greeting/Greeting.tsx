import { useTranslation } from 'react-i18next';

import styles from './Greeting.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const Greeting = () => {
  const { user } = useAppSelector(userData);
  const { t } = useTranslation();

  return (
    <section className={styles.greeting}>
      <h3>{t('user.greeting')}</h3>
      <h2>{`${user?.firstName} ${user?.lastName}`}</h2>
    </section>
  );
};

export default Greeting;
