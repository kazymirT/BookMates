import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { RegisterValues, registerSchema } from '../../../utils/validateSchema';
import Checkbox from '../../ui-components/Checkbox/Checkbox';
import Input from '../../ui-components/Input/Input';
import styles from '../Form.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { registerApi } from '@/redux/services/api';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterForm = () => {
  const [isServerError, setIsServerError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      name: '',
      surName: '',
      email: '',
      confirmEmail: '',
      password: '',
      rememberMe: true,
    },
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (formData: RegisterValues) => {
    const response = await registerApi({
      firstName: formData.name,
      lastName: formData.surName,
      email: formData.email,
      password: formData.password,
    });
    if (response.ok) {
      console.log('ok');
    } else if (response.status === 400) {
      setIsServerError(true);
    }
  };

  const handleLogin = () => dispatch(toggleModal('login'));
  const handleClose = () => dispatch(toggleModal(null));
  const hideServerError = () => isServerError && setIsServerError(false);

  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Створити Акаунт</h2>
        <button className={styles.close} onClick={handleClose}></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles['input-container']}>
          <Input
            {...register('name')}
            placeholder="Ім`я"
            type="text"
            errorMessage={errors.name?.message}
          />
          <Input
            {...register('surName')}
            placeholder="Прізвище"
            type="text"
            errorMessage={errors.surName?.message}
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
        </div>
        <button type="submit" className={styles.submit} disabled={!isValid}>
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
