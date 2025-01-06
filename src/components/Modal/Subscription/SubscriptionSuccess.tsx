import { useTranslation } from 'react-i18next';

import styles from './SubscriptionSuccess.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const SubscriptionSuccess = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles.success}>
      <h2>{t('home.subscribe.success.title')}</h2>
      <p>{t('home.subscribe.success.description')}</p>
      <Button
        size={Sizes.Full}
        variant={Variant.Basic}
        onClick={handleClose}
        aria-label="close modal"
        text={t('home.subscribe.success.button')}
      />
    </section>
  );
};

export default SubscriptionSuccess;
