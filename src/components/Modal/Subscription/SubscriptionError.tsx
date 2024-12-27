import { useTranslation } from 'react-i18next';

import styles from './SubscriptionSuccess.module.scss';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const SubscriptionError = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <div className={styles.error}>
      <button type="button" className={styles.close} onClick={handleClose}>
        <Icon.Close />
      </button>
      <p>{t('home.subscribe.error')}</p>
    </div>
  );
};

export default SubscriptionError;
