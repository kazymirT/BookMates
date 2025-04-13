import { useTranslation } from 'react-i18next';

import styles from './Contacts.module.scss';
import { SETTINGS } from './data';
import Input from '../Input/Input';
import Subscribe from '../Subscribe/Subscribe';
import { RadioGroup } from '@/components/RadioGroup/RadioGroup';
import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import Change from '@/Pages/User/modules/Settings/components/Change/Change';
import { useAppSelector } from '@/redux/hooks';
import {
  useDeleteUserMutation,
  useMeUserMutation,
} from '@/redux/services/user';
import { userData } from '@/redux/slices/userSlice';

const Contacts = () => {
  const { user } = useAppSelector(userData);
  const { t } = useTranslation();
  const [deleteUser] = useDeleteUserMutation();
  const [meUser] = useMeUserMutation();

  const handleDelete = async () => {
    await deleteUser();
  };
  const handleMyUser = async () => {
    try {
      const data = await meUser().unwrap();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
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
      <Button
        size={Sizes.Full}
        variant={Variant.Delete}
        text="Delete"
        onClick={handleDelete}
      />
      <Button
        size={Sizes.Full}
        variant={Variant.Delete}
        text="My user"
        onClick={handleMyUser}
      />
    </section>
  );
};

export default Contacts;
