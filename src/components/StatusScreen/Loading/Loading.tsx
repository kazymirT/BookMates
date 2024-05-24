import Lottie from 'react-lottie';

import styles from './Loading.module.scss';
import animationData from '@/assets/animations/book.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Loading = () => {
  return (
    <div className={styles.container}>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default Loading;
