import styles from '../../Forms/Form.module.scss';
import thanks from '@/assets/images/thanks.png';
import Salute from '@/components/StatusScreen/Salute/Salute';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const RegisterSuccess = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  const handleLogin = () => dispatch(toggleModal({ openedModalType: 'login' }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Реєстрація успішна</h2>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
        ></button>
      </div>
      <div className={styles['success-register']}>
        <img src={thanks} alt="thanks" width={246} height={246} />
        <Salute />
      </div>
      <p className={styles.success}>
        Дякуємо за реєстрацію. На вашу електронну пошту відправлено листа з
        детальною інформацією.
      </p>
      <button className={styles.submit} onClick={handleLogin}>
        Увійти
      </button>
      <p className={styles.terms}>
        Bookstore використовує вашу особисту інформацію для створення вашого
        облікового запису, звязку з вами, обробки ваших транзакцій з нами, а
        також для надання вам наших продуктів і послуг. Продовжуючи, ви
        погоджуєтеся з нашими Умовами використання та Політикою
        конфіденційності.
      </p>
    </section>
  );
};

export default RegisterSuccess;
