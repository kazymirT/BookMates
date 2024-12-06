import styles from './AllCollections.module.scss';
import { category } from './data';
import CollectionsCard from '../../components/CollectionsCard/CollectionsCard';

const AllCollections = () => {
  return (
    <div className={styles.collections}>
      {category &&
        category.map((item) => <CollectionsCard key={item.id} {...item} />)}
    </div>
  );
};

export default AllCollections;
