import styles from './Subscribe.module.scss';
import Checkbox from '@/components/ui-components/Checkbox/Checkbox';

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <h3>Моя підписка</h3>
      <div>
        <Checkbox variant="green" type="checkbox">
          <p>Підписка на отримання рекламних листів</p>
        </Checkbox>
      </div>
    </div>
  );
};

export default Subscribe;
