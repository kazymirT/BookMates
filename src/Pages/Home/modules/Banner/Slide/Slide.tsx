import { FC } from 'react';

import styles from './Slide.module.scss';
import { SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  slide: { button, description, img, title },
}) => {
  return (
    <div className={styles['slider-container']}>
      <div
        className={styles.slider}
        // style={{
        //   backgroundImage: img ? `url(${img})` : undefined,
        // }}
      >
        <img
          src={img}
          alt="image for slide"
          // loading="lazy"
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
