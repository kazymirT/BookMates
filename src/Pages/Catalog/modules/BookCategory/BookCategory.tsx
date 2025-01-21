import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './BookCategory.module.scss';
import { MAX_CATEGORY_LENGTH } from './constants';
import SkeletonCategory from '@/components/Skeleton/SkeletonCategories';
import { useAppDispatch } from '@/redux/hooks';
import { useGetAllAttributesQuery } from '@/redux/services/attributes';
import { addFilterItem } from '@/redux/slices/queryParams';

const BookCategory = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data: category, isSuccess, isLoading } = useGetAllAttributesQuery();

  const setCategory = (id: number, name: string) => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: { id, name },
        isClean: true,
      })
    );
  };
  const linkClass = (id: number) => {
    const isActive =
      new URLSearchParams(location.search).get('categories') === String(id);
    return classNames(styles.link, { [styles.active]: isActive });
  };
  return (
    <section className={styles.category}>
      <h3 className={styles.title}>{t('catalog.title-two')}</h3>
      <div className={styles.content}>
        {isSuccess &&
          category.categories
            .slice(0, MAX_CATEGORY_LENGTH)
            .map(({ id, name }) => (
              <button
                type="button"
                onClick={() => setCategory(id, name)}
                key={id}
                className={linkClass(id)}
              >
                {name}
              </button>
            ))}
        {isLoading && <SkeletonCategory />}
      </div>
    </section>
  );
};

export default BookCategory;
