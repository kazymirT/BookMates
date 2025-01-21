import classNames from 'classnames';

import styles from './AllCollections.module.scss';
import { category } from './data';
import CollectionsCard from '../../components/CollectionsCard/CollectionsCard';
import SkeletonCollectionsCard from '@/components/Skeleton/SkeletonCollectionsCard';
import { useAppSelector } from '@/redux/hooks';
import { isLoading } from '@/redux/slices/skeletonSlice';

const AllCollections = () => {
  const isSkeleton = useAppSelector(isLoading);
  const collectionsCN = classNames(styles.collections, {
    [styles['collections__skeleton']]: isSkeleton,
  });
  return (
    <div className={collectionsCN}>
      {!isSkeleton &&
        category &&
        category.map((item) => <CollectionsCard key={item.id} {...item} />)}
      {isSkeleton && <SkeletonCollectionsCard />}
    </div>
  );
};

export default AllCollections;
