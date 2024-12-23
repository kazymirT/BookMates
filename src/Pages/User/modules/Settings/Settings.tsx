import Contacts from './components/Contacts/Contacts';
import styles from './Settings.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <Menu
        title={
          <Title text="Мої налаштування" size="full" textPosition="center" />
        }
        body={<Contacts />}
      />
    </div>
  );
};

export default Settings;
