import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginWithCodeMutation } from '@/redux/services/authNewApi';
import { toggleModal } from '@/redux/slices/modalSlice';
// import { clearPendingLoginData, userData } from '@/redux/slices/userSlice';
import { getNewDeviceSchema, NewDeviceValues } from '@/utils/validateSchema';

const DeviceCode = () => {
  const { t } = useTranslation();
  // const user = useAppSelector(userData);
  const dispatch = useAppDispatch();
  const [loginWithCode] = useLoginWithCodeMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<NewDeviceValues>({
    resolver: zodResolver(getNewDeviceSchema(t)),
    mode: 'onTouched',
  });
  const onSubmit = async (data: NewDeviceValues) => {
    const { newDeviceCode } = data;
    const email = '046y6tedqm@mailpwr.com';
    const password = '1Qqqqqqq';
    await loginWithCode({ email, password, newDeviceCode });
    // if (user && user.pendingLoginData) {
    //   const {
    //     pendingLoginData: { email, password },
    //   } = user;
    //   dispatch(clearPendingLoginData());
    // }
  };

  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="close modal"
        >
          <Icon.Close />
        </button>
        <h2>Код нового пристрою</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('newDeviceCode')}
          placeholder="####"
          type="text"
          autoFocus
          errorMessage={errors.newDeviceCode?.message}
        />
        <Button
          type="submit"
          size={Sizes.Full}
          variant={Variant.Basic}
          text="Підтвердити"
          disabled={!isValid || isSubmitting}
        />
      </form>
    </section>
  );
};

export default DeviceCode;
