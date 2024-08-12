import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { Icon } from '@/components/ui-components/Icons';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';
import { LoginValues, loginSchema } from '@/utils/validateSchema';

const LoginForm = () => {
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const { loginUser } = useFormActions();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: LoginValues) => {
    const error = await loginUser(data);
    if (error) {
      setIsServerError(true);
    }
  };

  const handleRegister = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));
  const handleResetPassword = () =>
    dispatch(toggleModal({ openedModalType: 'reset-password' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () => isServerError && setIsServerError(false);

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Логін</h2>
        <button className={styles.close} onClick={handleClose}>
          <Icon.Close />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <Input
            {...register('email')}
            placeholder="Електронна пошта"
            type="email"
            serverError={isServerError}
            onFocus={hideServerError}
            errorMessage={errors.email?.message}
          />
          <Input
            {...register('password')}
            placeholder="Пароль"
            type="password"
            serverError={isServerError}
            onFocus={hideServerError}
            errorMessage={errors.password?.message}
          />
          {isServerError && (
            <div className={styles.error}>
              <p>
                Ваша Електронна пошта або пароль невірні. Будь ласка, спробуйте
                ще раз або
              </p>
              <button
                type="button"
                onClick={handleResetPassword}
                className={styles.remember}
              >
                змініть пароль.
              </button>
            </div>
          )}
        </div>
        {!isServerError && (
          <button
            type="button"
            onClick={handleResetPassword}
            className={styles['reset-password']}
          >
            Забув пароль
          </button>
        )}
        <Button
          buttonType={ButtonType.Submit}
          size={Sizes.Full}
          variant={Variant.Basic}
          text="Увійти"
          disabled={!isValid || isSubmitting || isServerError}
        />
      </form>
      <button
        className={styles.register}
        type="button"
        onClick={handleRegister}
      >
        В мене немає облікового запису
      </button>
    </section>
  );
};

export default LoginForm;
