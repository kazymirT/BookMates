import { useTranslation } from 'react-i18next';

import styles from '../../Forms/Form.module.scss';
import Succes from '@/components/StatusScreen/Succes/Succes';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterSuccess = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('register-success.title')}</h2>
        <button type="button" className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <Succes loop={true} />
      <p className={styles.success}>{t('register-success.description')}</p>
    </section>
  );
};

export default RegisterSuccess;
