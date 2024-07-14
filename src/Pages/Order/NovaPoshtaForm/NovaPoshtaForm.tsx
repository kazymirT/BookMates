import { useState } from 'react';
import { Controller } from 'react-hook-form';

import { NovaPoshtaFormProps } from '../order.types';
import styles from '../PersonalInfoForm/PersonalInfoForm.module.scss';
import AutoComplete from '@/components/ui-components/SearchAutocomplete/AutoComplete';

const NovaPoshtaForm = ({ control }: NovaPoshtaFormProps) => {
  const [cityName, setCityName] = useState<string>('');
  const handleCityName = (newValue: string) => {
    setCityName(newValue);
  };
  const [warehouses, setWarehouses] = useState<string>('');
  const handleWarehousesName = (newValue: string) => {
    setWarehouses(newValue);
  };

  return (
    <article className={styles['form-item']}>
      <div className={styles.title}>
        <div className={styles.circle}>2</div>
        <h3>Як доставити</h3>
      </div>
      <div className={styles.address}>
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState }) => (
            <AutoComplete
              placeholder="Місто"
              value={field.value}
              type="City"
              onChange={(newValue: { label: string; value: string }) => {
                field.onChange(newValue.label);
                handleCityName(newValue.value);
                handleWarehousesName('Відділення Нової Пошти/поштомату');
              }}
              onBlur={field.onBlur}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="department"
          render={({ field, fieldState }) => (
            <AutoComplete
              placeholder="Відділення Нової Пошти/поштомату"
              value={warehouses}
              type="Warehouses"
              isDisabled={cityName.length <= 1 ? true : false}
              onChange={(newValue: { label: string; value: string }) => {
                field.onChange(newValue.label);
                handleWarehousesName(newValue.label);
              }}
              searchName={cityName}
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
