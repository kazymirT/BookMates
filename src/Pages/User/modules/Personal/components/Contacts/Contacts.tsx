import styles from './Contacts.module.scss';
import { FACE_USER } from '@/Pages/User/data';

const Contacts = () => {
  return (
    <>
      {FACE_USER && (
        <>
          <ul className={styles.list}>
            <li>
              <span className={styles.item}>Номер</span>
              <span className={styles.data}>{FACE_USER.phone}</span>
            </li>
            <li>
              <span className={styles.item}>Пошта</span>
              <span className={styles.data}>{FACE_USER.email}</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Contacts;
