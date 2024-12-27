import styles from './Contacts.module.scss';
import { SETTINGS } from './data';
import Input from '../Input/Input';
import Subscribe from '../Subscribe/Subscribe';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import Change from '@/Pages/User/modules/Settings/components/Change/Change';

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.change}>
        <RadioGroup title="Мова:" variant="radio" />
        <Change
          options={SETTINGS.theme}
          defaultValue={SETTINGS.defaultTheme}
          title="Вигляд:"
        />
      </div>
      <Input
        title="Номер телефону"
        variant="phone"
        defaultValues={{ phone: '+38 (000) 000-00-00' }}
      />
      <Input
        title="Електронна пошта"
        variant="email"
        defaultValues={{ email: 'valeriasdhfgtbnd@gmail.com' }}
      />
      <Subscribe />
    </section>
  );
};

export default Contacts;
