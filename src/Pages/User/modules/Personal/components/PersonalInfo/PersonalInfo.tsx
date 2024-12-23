import styles from './PersonalInfo.module.scss';
import { FACE_USER } from '@/Pages/User/data';

const PersonalInfo = () => {
  return (
    <>
      {FACE_USER && (
        <>
          <ul className={styles.list}>
            <li>
              <span className={styles.item}>Прізвище:</span>
              <span className={styles.data}>{FACE_USER.lastName}</span>
            </li>
            <li>
              <span className={styles.item}>Ім’я:</span>
              <span className={styles.data}>{FACE_USER.firstName}</span>
            </li>
            <li>
              <span className={styles.item}>Дата народження:</span>
              <span className={styles.data}>{FACE_USER.dataOfBorn}</span>
            </li>
            <li>
              <span className={styles.item}>Стать:</span>
              <span className={styles.data}>{FACE_USER.gender}</span>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default PersonalInfo;
