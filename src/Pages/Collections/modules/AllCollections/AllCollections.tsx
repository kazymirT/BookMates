import styles from './AllCollections.module.scss';
import CollectionsCard from '../../components/CollectionsCard/CollectionsCard';
import { category } from '@/Pages/Home/modules/Category/data';

const AllCollections = () => {
  return (
    <div className={styles.collections}>
      {category &&
        category.map(({ id, img, title }) => (
          <CollectionsCard key={id} img={img} id={id} title={title} />
        ))}
    </div>
  );
};

export default AllCollections;
