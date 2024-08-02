import styles from './PersonalInfoForm.module.scss';
import { type PersonalInfoFormProps } from '../order.types';
import Input from '@/components/ui-components/Input/Input';
import InputPhone from '@/components/ui-components/Input/InputPhone';

const PersonalInfoForm = ({ register, errors }: PersonalInfoFormProps) => {
  return (
    <article className={styles['form-item']}>
      <div className={styles.title}>
        <div className={styles.circle}>1</div>
        <h3>Дані для доставки</h3>
      </div>
      <div className={styles['input-container']}>
        <Input
          {...register.firstName}
          placeholder="Ім`я"
          requiredMessage
          type="text"
          errorMessage={errors.firstName?.message}
        />
        <Input
          {...register.lastName}
          placeholder="Прізвище"
          requiredMessage
          type="text"
          errorMessage={errors.lastName?.message}
        />
        <InputPhone
          {...register.phone}
          placeholder="Телефон"
          requiredMessage
          type="text"
          errorMessage={errors.phone?.message}
        />
        <Input
          {...register.email}
          requiredMessage
          placeholder="Email"
          type="text"
          errorMessage={errors.email?.message}
        />
      </div>
    </article>
  );
};

export default PersonalInfoForm;
