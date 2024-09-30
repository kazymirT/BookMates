import { skipToken } from '@reduxjs/toolkit/query';
import { SearchAutocomplete } from '@ui_components/Autocomplete/Autocomplete';
import AutoCompleteAsync from '@ui_components/Autocomplete/AutocompleteAsync';
import { CITY_DEFAULT } from '@ui_components/Autocomplete/constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type NovaPoshtaFormProps } from '../order.types';
import styles from '../PersonalInfoForm/PersonalInfoForm.module.scss';
import { type Option } from '@/components/ui-components/Select/Select.types';
import { useAppDispatch } from '@/redux/hooks';
import { useGetWarehousesQuery } from '@/redux/services/novaApi';
import { type Address, novaApi } from '@/redux/services/novaApi';

const NovaPoshtaForm = ({ control, setValue }: NovaPoshtaFormProps) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const [cityName, setCityName] = useState<string | undefined>(undefined);
  const { currentData: warehousesData } = useGetWarehousesQuery(
    cityName ?? skipToken
  );
  const loadOptionsCity = async (inputValue: string): Promise<Address[]> => {
    const result = await dispatch(
      novaApi.endpoints.getSettlements.initiate(inputValue)
    ).unwrap();
    return result;
  };

  const handleCityName = (newValue?: string) => {
    setCityName(newValue);
    setValue('department', '');
  };

  return (
    <article className={styles['form-item']}>
      <div className={styles.title}>
        <div className={styles.circle}>2</div>
        <h3>{t('order.form.two.title')}</h3>
      </div>
      <div className={styles.address}>
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState }) => (
            <AutoCompleteAsync
              requiredMessage={t('order.form.two.city.required')}
              placeholder={t('order.form.two.city.placeholder')}
              defaultOptions={CITY_DEFAULT}
              value={
                field.value
                  ? { label: field.value, value: field.value }
                  : undefined
              }
              onChange={(newValue: Option | null) => {
                field.onChange(newValue?.label);
                handleCityName(newValue?.value);
              }}
              onBlur={field.onBlur}
              errorMessage={fieldState.error?.message}
              loadOptions={loadOptionsCity}
            />
          )}
        />
        <Controller
          control={control}
          name="department"
          render={({ field, fieldState }) => (
            <SearchAutocomplete
              data={warehousesData ?? []}
              requiredMessage={t('order.form.two.department.required')}
              placeholder={t('order.form.two.department.placeholder')}
              keyChange={cityName}
              isDisabled={!cityName}
              onChange={(newValue: Option | null) => {
                field.onChange(newValue?.label);
              }}
              onBlur={field.onBlur}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
    </article>
  );
};

export default NovaPoshtaForm;
