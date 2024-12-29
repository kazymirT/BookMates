import { useTranslation } from 'react-i18next';

import Contacts from './components/Contacts/Contacts';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import styles from './Personal.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Personal = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.personal}>
      <Menu
        title={
          <Title text={t('user.info.title')} size="m" textPosition="center" />
        }
        body={<PersonalInfo />}
      />
      <Menu
        title={
          <Title
            text={t('user.contact.title')}
            size="s"
            textPosition="center"
          />
        }
        body={<Contacts />}
      />
    </div>
  );
};

export default Personal;
