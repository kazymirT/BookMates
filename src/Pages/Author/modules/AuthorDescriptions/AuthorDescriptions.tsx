import { FC } from 'react';

import styles from './AuthorDescriptions.module.scss';
import { AuthorDescriptionsProps } from './types';
import BookSeries from '../../components/BookSeries/BookSeries';

const AuthorDescriptions: FC<AuthorDescriptionsProps> = ({
  img,
  bio,
  booksSeries,
}) => {
  return (
    <div className={styles.content}>
      <img
        className={styles.avatar}
        src={img}
        alt=""
        width={306}
        height={382}
      />
      <div className={styles.descriptions}>
        <div className={styles.top}>
          {bio &&
            bio.slice(0, -1).map((description, index) => (
              <p key={index} className={styles.description}>
                {description}
              </p>
            ))}
        </div>
        <p className={styles.description}>{bio[bio.length - 1]}</p>
        <div className={styles.bottom}>
          {booksSeries.map((series) => (
            <BookSeries series={series} key={series.seriesName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorDescriptions;
