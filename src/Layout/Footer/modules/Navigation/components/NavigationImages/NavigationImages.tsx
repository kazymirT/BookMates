import { NAVIGATION_IMG } from './data';
import styles from './NavigationImages.module.scss';

const NavigationImages = () => {
  return (
    <ul className={styles.btns}>
      {NAVIGATION_IMG.map(({ alt, id, src }) => (
        <li key={id}>
          <img src={src} alt={alt} width={160} height={48} loading="lazy" />
        </li>
      ))}
    </ul>
  );
};

export default NavigationImages;
