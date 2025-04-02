import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './BookCategory.module.scss';
import { MAX_CATEGORY_LENGTH } from './constants';
import SkeletonCategory from '@/components/Skeleton/SkeletonCategories';
import { useAppDispatch } from '@/redux/hooks';
import {
  MetaAttributes,
  useGetAllAttributesMetaQuery,
} from '@/redux/services/meta';
import { addFilterItem } from '@/redux/slices/queryParams';

const BookCategory = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    data: category,
    isSuccess,
    isLoading,
  } = useGetAllAttributesMetaQuery();

  const setCategory = (item: MetaAttributes) => {
    dispatch(
      addFilterItem({
        filterName: 'categories',
        attributes: item,
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
          category.cats
            .slice(0, MAX_CATEGORY_LENGTH)
            .map(({ id, nameEN, nameUA }) => (
              <button
                type="button"
                onClick={() => setCategory({ id, nameEN, nameUA })}
                key={id}
                className={linkClass(id)}
              >
                {i18n.language === 'en' ? nameEN : nameUA}
              </button>
            ))}
        {isLoading && <SkeletonCategory />}
      </div>
    </section>
  );
};

export default BookCategory;
