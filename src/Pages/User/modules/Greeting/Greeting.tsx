import styles from './Greeting.module.scss';

const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <h3>Вітаємо,</h3>
      <h2>Валерія Мельник</h2>
    </section>
  );
};

export default Greeting;
