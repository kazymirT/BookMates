import { PropsWithChildren } from 'react';
// import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import SectionDescription from '../components/SectionDescription/SectionDescription';
import styles from '../Product.module.scss';
import { BookById } from '@/redux/services/services.types';

export function InlineWrapperWithMargin({
  children,
}: PropsWithChildren<unknown>) {
  return <span style={{ marginRight: '0.75rem' }}>{children}</span>;
}

const ProductDetails = ({ book }: { book?: BookById }) => {
  // const { t } = useTranslation();
  return (
    <div className={styles.book}>
      {book && (
        <>
          <div className={styles.info}>
            <h2>{book ? book.title : <Skeleton />}</h2>
            <div className={styles.authors}>
              <h2>
                {book ? (
                  book.authors.map((author) => author.name).join(', ')
                ) : (
                  <Skeleton containerClassName="flex-1" width={588} />
                )}
              </h2>
            </div>
          </div>
          <div className={styles.details}>
            <SectionDescription title="Характеристики:">
              {
                <ul className={styles.list}>
                  <li>
                    <span>Рік видання:</span>
                    <div>
                      {book.year.map((option) => (
                        <Link
                          key={option.id}
                          className={styles.item}
                          to={`/catalog?years=${option.id}`}
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                  <li>
                    <span>Мова книги:</span>
                    <div>
                      {book.languages.map((option) => (
                        <Link
                          key={option.id}
                          className={styles.item}
                          to={`/catalog?language=${option.id}`}
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                  <li>
                    <span>Обкладинка:</span>
                    <div>
                      <span>Тверда</span>
                    </div>
                  </li>
                  <li>
                    <span>Кількість сторінок:</span>
                    <div>
                      <span>288</span>
                    </div>
                  </li>
                  <li>
                    <span>Категорія:</span>
                    <div>
                      {book.categories.map((option) => (
                        <Link
                          key={option.id}
                          className={styles.item}
                          to={`/catalog?categories=${option.id}`}
                        >
                          {option.name},
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              }
            </SectionDescription>
            <SectionDescription title="Опис:">
              <p className={styles.description}>{book?.description}</p>
            </SectionDescription>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductDetails;
