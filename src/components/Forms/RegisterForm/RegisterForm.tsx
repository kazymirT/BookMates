import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { RegisterValues, registerSchema } from '../../../utils/validateSchema';
import Checkbox from '../../ui-components/Checkbox/Checkbox';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { useFormActions } from '@/hooks/useFormActions';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterForm = () => {
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const { registerUser } = useFormActions();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<RegisterValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      rememberMe: true,
    },
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (formData: RegisterValues) => {
    const error = await registerUser(formData);
    if (error) {
      setIsServerError(true);
    }
  };

  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const hideServerError = () => isServerError && setIsServerError(false);

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Реєстрація</h2>
        <button className={styles.close} onClick={handleClose}></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles['input-container']}>
          <Input
            {...register('firstName')}
            placeholder="Ім`я"
            type="text"
            errorMessage={errors.firstName?.message}
          />
          <Input
            {...register('lastName')}
            placeholder="Прізвище"
            type="text"
            errorMessage={errors.lastName?.message}
          />
          <div className={styles['email-container']}>
            <Input
              {...register('email')}
              placeholder="Електрона пошта"
              type="email"
              serverError={isServerError}
              handleFocus={hideServerError}
              errorMessage={errors.email?.message}
            />
            {isServerError && (
              <div className={styles.error}>
                <p>Обліковий запис з такою електроною поштою вже існує.</p>{' '}
                <a href="#">Забув пароль</a>
              </div>
            )}
          </div>
          <Input
            {...register('confirmEmail')}
            placeholder="Підтвердіть електронну пошту"
            type="email"
            errorMessage={errors.confirmEmail?.message}
          />
          <Input
            {...register('password')}
            placeholder="Пароль"
            type="password"
            errorMessage={errors.password?.message}
          />
          <p className={styles['password-hint']}>
            Мінімум 8 символів, без відступів і спеціальних знаків
          </p>
        </div>
        <button
          type="submit"
          className={styles.submit}
          disabled={!isValid || isServerError || isSubmitting}
        >
          Створити акаунт
        </button>
        <Checkbox {...register('rememberMe')} label="Залишатися в акаунті" />
      </form>
      <button className={styles.register} type="button" onClick={handleLogin}>
        В мене вже є обліковий запис
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

export default RegisterForm;
