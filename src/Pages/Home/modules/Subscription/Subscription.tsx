import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './Subscription.module.scss';
import InputWithButton from '../../../../components/InputWithButton/InputWithButton';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import {
  getResetPasswordSchema,
  ResetPasswordValues,
} from '@/utils/validateSchema';

const Subscription = () => {
  const { t } = useTranslation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<ResetPasswordValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(getResetPasswordSchema(t)),
    mode: 'onTouched',
  });
  const onSubmit = async (data: ResetPasswordValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };
  return (
    <section className={styles.subscription}>
      <div className={styles.content}>
        <h3>Підпишіться на розсилку</h3>
        <p>
          Ви будете першими дізнаватися про нові книжки та отримувати наші
          рекомендації.
        </p>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputWithButton
            {...register('email')}
            type="email"
            errorMessage={errors.email?.message}
            placeholder="Email"
            variant="email"
          >
            <Button
              buttonType={ButtonType.Submit}
              size={Sizes.Medium}
              variant={Variant.Basic}
              text="Підписатися"
              disabled={!isValid || isSubmitting}
            />
          </InputWithButton>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
