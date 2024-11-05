import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './AuthorDescriptions.module.scss';
import { AuthorDescriptionsProps } from './types';
import { formatTextWithLists } from '@/utils/formatTextWithLists';
import { formatTextWithSpans } from '@/utils/formatTextWithSpans';

const AuthorDescriptions: FC<AuthorDescriptionsProps> = ({
  img,
  descriptions,
}) => {
  const text = formatTextWithSpans(descriptions.description);
  const lists = formatTextWithLists(descriptions.books);
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
          {text &&
            text.map((description, index) => (
              <p key={index} className={styles.description}>
                {description}
              </p>
            ))}
        </div>
        <p className={styles.description}>
          {formatTextWithSpans(descriptions.title)}
        </p>
        <div className={styles.bottom}>
          {lists &&
            lists.map((list, index) => (
              <div key={index} className={styles.list}>
                <h4>{list[0].text}</h4>
                <ul>
                  {list.map(
                    ({ text, id }, index) =>
                      index !== 0 && (
                        <li key={index}>
                          {id ? (
                            <Link key={index} to={`/product/${id}`}>
                              {text}
                            </Link>
                          ) : (
                            text
                          )}
                        </li>
                      )
                  )}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorDescriptions;
