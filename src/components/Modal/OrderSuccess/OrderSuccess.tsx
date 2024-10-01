import { useTranslation } from 'react-i18next';

import styles from '../../Forms/Form.module.scss';
import thanks from '@/assets/images/thanks.png';
import Salute from '@/components/StatusScreen/Salute/Salute';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { ButtonLink } from '@/components/ui-components/ButtonLink/ButtonLink';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const OrderSuccess = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('order-success.title')}</h2>
        <button type="button" className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <div className={styles['success']}>
        <img src={thanks} alt="thanks" width={246} height={246} />
        <Salute />
        <p className={styles.success}>{t('order-success.description')}</p>
      </div>
      <ButtonLink
        buttonType={ButtonType.Button}
        size={Sizes.Full}
        variant={Variant.Basic}
        onClick={handleClose}
        text={t('order-success.btn')}
        url="/catalog"
      />
    </section>
  );
};

export default OrderSuccess;
