import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './AllCollections.module.scss';
import CollectionsCard from '../../components/CollectionsCard/CollectionsCard';
import SkeletonCollectionsCard from '@/components/Skeleton/SkeletonCollectionsCard';
import { useGetAllCollectionsQuery } from '@/redux/services/collections';

const AllCollections = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const { data: collection, isSuccess } = useGetAllCollectionsQuery(lang);
  const collectionsCN = classNames(styles.collections, {
    [styles['collections__skeleton']]: !isSuccess,
  });
  return (
    <div className={collectionsCN}>
      {isSuccess ? (
        collection.map((item) => <CollectionsCard key={item.id} {...item} />)
      ) : (
        <SkeletonCollectionsCard />
      )}
    </div>
  );
};

export default AllCollections;
