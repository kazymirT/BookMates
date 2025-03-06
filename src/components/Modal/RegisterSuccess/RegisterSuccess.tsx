import { useTranslation } from 'react-i18next';

import styles from '../../Forms/Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterSuccess = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleCloseModal = () =>
    dispatch(toggleModal({ openedModalType: null }));

  return (
    <section
      className={`${styles['form-container']} ${styles['form-container__register']}`}
    >
      <div className={styles['title-container']}>
        <h2>{t('register-success.title')}</h2>
      </div>
      <p className={styles.success}>{t('register-success.description')}</p>
      <Button
        variant={Variant.Basic}
        size={Sizes.Full}
        text={t('register-success.button')}
        onClick={handleCloseModal}
      />
    </section>
  );
};

export default RegisterSuccess;
