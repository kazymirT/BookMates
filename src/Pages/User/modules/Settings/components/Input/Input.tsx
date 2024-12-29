import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from './Input.module.scss';
import { InputProps } from './types';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import UserInput from '@/components/ui-components/UserInput/UserInput';
import { getChangeSchema, GetChangeValues } from '@/utils/validateSchema';

const Input: FC<InputProps> = ({ title, variant, defaultValues }) => {
  const { t } = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const id = useId();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm<GetChangeValues>({
    defaultValues: defaultValues,
    resolver: zodResolver(getChangeSchema(t)),
    mode: 'onTouched',
  });
  const handleEdit = () => setIsEdit(true);
  const handleCancel = () => {
    setIsEdit(false);
    reset();
  };

  const onSubmit = async (data: GetChangeValues) => {
    const value = data[variant];
    if (value) {
      console.log(`Submitting ${variant}:`, value);
    }
    setIsEdit(false);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={id}>{title}</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInput
          {...register(variant)}
          errorMessage={errors[variant]?.message}
          disabled={!isEdit}
          placeholder={
            variant === 'email'
              ? 'valeriasdhfgtbnd@gmail.com'
              : '+380 00 000 00 00'
          }
          variant={variant}
          id={id}
        />
        {isEdit ? (
          <div className={styles.btns}>
            <Button
              type="submit"
              size={Sizes.UserS}
              variant={Variant.UserSave}
              text={t('user.settings.btnSave')}
              disabled={!isValid || isSubmitting}
            />
            <Button
              type="button"
              size={Sizes.UserS}
              variant={Variant.UserCancel}
              text={t('user.settings.btnCancel')}
              onClick={handleCancel}
            />
          </div>
        ) : (
          <Button
            type="button"
            size={Sizes.UserS}
            variant={Variant.UserEdit}
            text={t('user.settings.btnEdit')}
            onClick={handleEdit}
          />
        )}
      </form>
    </div>
  );
};

export default Input;
