import Contacts from './components/Contacts/Contacts';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import styles from './Personal.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Personal = () => {
  return (
    <div className={styles.personal}>
      <Menu
        title={
          <Title text="Основна інформація" size="m" textPosition="center" />
        }
        body={<PersonalInfo />}
      />
      <Menu
        title={<Title text="Контакти" size="s" textPosition="center" />}
        body={<Contacts />}
      />
    </div>
  );
};

export default Personal;
