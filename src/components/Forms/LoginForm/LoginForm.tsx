import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Checkbox from '../../ui-components/Checkbox/Checkbox';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { loginApi } from '@/redux/services/api';
import { toggleModal } from '@/redux/slices/modalSlice';
import { LoginValues, loginSchema } from '@/utils/validateSchema';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [isServerError, setIsServerError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: LoginValues) => {
    const response = await loginApi({
      email: data.email,
      password: data.password,
    });
    if (response.ok) {
      console.log('ok');
    } else if (response.status === 401) {
      setIsServerError(true);
    }
  };
  const handleRegister = () => dispatch(toggleModal('create-account'));
  const handleClose = () => dispatch(toggleModal(null));
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
            placeholder="Електронна Пошта"
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
                змініть пароль
              </a>
            </div>
          )}
        </div>
        {!isServerError && (
          <a className={styles.remember} href="#">
            Забув пароль
          </a>
        )}

        <button type="submit" className={styles.submit} disabled={!isValid}>
          Увійти
        </button>
        <Checkbox {...register('rememberMe')} label="Залишатися в акаунті" />
      </form>
      <button
        className={styles.register}
        type="button"
        onClick={handleRegister}
      >
        В мене нема облікового запису
      </button>
      <p className={styles.terms}>
        Bookstore використовує вашу особисту інформацію для створення вашого
        облікового запису, зв&apos;язку з вами, обробки ваших транзакцій з нами,
        а також для надання вам наших продуктів і послуг. Продовжуючи, ви
        погоджуєтеся з нашими
        <a>Умовами використання</a>
        та
        <a>Політикою конфіденційності.</a>
      </p>
    </section>
  );
};

export default LoginForm;
