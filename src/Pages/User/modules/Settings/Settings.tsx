import { useTranslation } from 'react-i18next';

import Contacts from './components/Contacts/Contacts';
import styles from './Settings.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.settings}>
      <Menu
        title={
          <Title
            text={t('user.settings.title')}
            size="full"
            textPosition="center"
          />
        }
        body={<Contacts />}
      />
    </div>
  );
};

export default Settings;
