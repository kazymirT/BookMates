import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '../../Forms/Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import Input from '@/components/ui-components/Input/Input';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { toggleStatus } from '@/redux/slices/statusSlice';
import {
  ResetPasswordValues,
  resetPasswordSchema,
} from '@/utils/validateSchema';

const ResetPassword = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { sendResetPassword } = useFormActions();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<ResetPasswordValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onTouched',
  });
  const onSubmit = async (data: ResetPasswordValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(toggleStatus('loading'));
    const response = await sendResetPassword();
    if (response) {
      dispatch(toggleStatus('succes'));
    }
  };
  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'login' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>{t('reset-password.title')}</h2>
        <button type="button" className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <p className={styles.success}>{t('support.description')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <Input
            {...register('email')}
            placeholder={t('reset-password.email')}
            type="email"
            errorMessage={errors.email?.message}
          />
        </div>
        <Button
          buttonType={ButtonType.Submit}
          size={Sizes.Full}
          variant={Variant.Basic}
          text={t('reset-password.btn-in')}
          disabled={!isValid || isSubmitting}
        />
      </form>
      <button
        className={styles.register}
        type="button"
        onClick={handleRegister}
      >
        {t('reset-password.btn-login')}
      </button>
    </section>
  );
};

export default ResetPassword;
