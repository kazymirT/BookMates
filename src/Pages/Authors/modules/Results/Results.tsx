import styles from './Results.module.scss';
import AuthorItem from '../../components/AuthorItem/AuthorItem';
import { Authors } from '@/utils/fake';

const Results = () => {
  return (
    <div className={styles.results}>
      {Authors &&
        Authors.map((author) => <AuthorItem key={author.id} author={author} />)}
    </div>
  );
};

export default Results;
