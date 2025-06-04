import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Slide.module.scss';
import { type SlideProps } from './types';

const Slide: FC<SlideProps> = ({ alt, image, link }) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <div className={styles.slider}>
        <img src={image} alt={alt} loading="lazy" width={981} height={344} />
      </div>
    </Link>
  );
};

export default Slide;
