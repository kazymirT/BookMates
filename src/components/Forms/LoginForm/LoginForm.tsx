import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Checkbox from '../../ui-components/Checkbox/Checkbox';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
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
      accept: false,
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
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () => isServerError && setIsServerError(false);

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Логін</h2>
        <button className={styles.close} onClick={handleClose}></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-container']}>
          <Input
            {...register('email')}
            placeholder="Електронна пошта"
            type="email"
            serverError={isServerError}
            handleFocus={hideServerError}
            errorMessage={errors.email?.message}
          />
          <Input
            {...register('password')}
            placeholder="Пароль"
            type="password"
            serverError={isServerError}
            handleFocus={hideServerError}
            errorMessage={errors.password?.message}
          />
          {isServerError && (
            <div className={styles.error}>
              <p>
                Ваша Електронна пошта або пароль невірні. Будь ласка, спробуйте
                ще раз або
              </p>
              <a href="#" className={styles.remember}>
                змініть пароль.
              </a>
            </div>
          )}
        </div>
        {!isServerError && (
          <a className={styles['reset-password']} href="#">
            Забув пароль
          </a>
        )}

        <button
          type="submit"
          className={styles.submit}
          disabled={!isValid || isSubmitting || isServerError}
        >
          Увійти
        </button>
        <Checkbox {...register('accept')}>
          <p className={styles.terms}>
            Bookstore використовує вашу особисту інформацію для створення вашого
            облікового запису, зв&apos;язку з вами, обробки ваших транзакцій з
            нами, а також для надання вам наших продуктів і послуг. Продовжуючи,
            ви погоджуєтеся з нашими
            <a>Умовами використання</a>
            та
            <a>Політикою конфіденційності.</a>
          </p>
        </Checkbox>
      </form>
      <button
        className={styles.register}
        type="button"
        onClick={handleRegister}
      >
        В мене нема облікового запису
      </button>
    </section>
  );
};

export default LoginForm;
