import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import { SETTINGS } from './data';
import Input from '../Input/Input';
import Subscribe from '../Subscribe/Subscribe';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import Change from '@/Pages/User/modules/Settings/components/Change/Change';
import { useAppSelector } from '@/redux/hooks';
import { userData } from '@/redux/slices/userSlice';

const Contacts = () => {
  const { user } = useAppSelector(userData);
  const { t } = useTranslation();
  return (
    <section className={styles.contacts}>
      <div className={styles.change}>
        <RadioGroup title={t('user.settings.language')} variant="radio" />
        <Change
          options={SETTINGS.theme}
          defaultValue={SETTINGS.defaultTheme}
          title={t('user.settings.theme')}
        />
      </div>
      <Input
        title={t('user.settings.phone')}
        variant="phone"
        defaultValues={{ phone: '+38 (000) 000-00-00' }}
      />
      <Input
        title={t('user.settings.email')}
        variant="email"
        defaultValues={{ email: user?.email ?? '' }}
      />
      <Subscribe />
    </section>
  );
};

export default Contacts;
