import { type FC } from 'react';

import styles from './Slide.module.scss';
import { type SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  slide: { button, description, img, title },
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <img
          src={img}
          alt="image for slide"
          loading="lazy"
          width={981}
          height={344}
        />
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <button type="button">{button}</button>
      </div>
    </div>
  );
};

export default Slide;
