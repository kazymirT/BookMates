import { zodResolver } from '@hookform/resolvers/zod';
import classNames from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './Subscription.module.scss';
import { SubscriptionProps } from './types';
import InputWithButton from '../ui-components/InputWithButton/InputWithButton';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import {
  getResetPasswordSchema,
  ResetPasswordValues,
} from '@/utils/validateSchema';

const Subscription: FC<SubscriptionProps> = ({ variant }) => {
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
  const subscribeCN = classNames(styles.subscription, {
    [styles[`subscription__${variant}`]]: variant,
  });
  return (
    <section className={subscribeCN}>
      <div className={styles.content}>
        <h3>{t('home.subscribe.title')}</h3>
        <p>{t('home.subscribe.description')}</p>
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
              type="submit"
              size={Sizes.Medium}
              variant={Variant.Basic}
              text={t('home.subscribe.button')}
              disabled={!isValid || isSubmitting}
            />
          </InputWithButton>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
