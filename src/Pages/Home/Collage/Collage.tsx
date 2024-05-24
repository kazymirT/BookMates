import styles from './Collage.module.scss';
import collageBook from '@/assets/images/collage.png';

const Collage = () => {
  return (
    <section className={styles.collage}>
      <div className={styles['img-box']}>
        <img src={collageBook} alt="collage books" />
      </div>
      <div className={styles.content}>
        <h2>Найбільний книжковий магазин у вашому регіоні</h2>
        <p>
          Приєднуйтесь до нашої спільноти книголюбів: Створіть свій обліковий
          запис і пориньте в нескінченну насолоду від читання!
        </p>
        <button>Створити акаунт</button>
      </div>
    </section>
  );
};

export default Collage;
