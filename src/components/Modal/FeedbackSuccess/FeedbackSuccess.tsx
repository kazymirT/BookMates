import styles from '../../Forms/Form.module.scss';
import Succes from '@/components/StatusScreen/Succes/Succes';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const FeedbackSuccess = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(toggleModal({ openedModalType: null }));
  return (
    <section className={styles['form-container']}>
      <div className={styles['title-container']}>
        <h2>Підтримка</h2>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
        ></button>
      </div>
      <Succes loop={true} />
      <p className={styles.success}>
        Дякуємо за звернення. Ми отримали ваше питання і зв’яжемося з вами
        якнайшвидше.
      </p>
    </section>
  );
};

export default FeedbackSuccess;
