import { useTranslation } from 'react-i18next';

import styles from './Results.module.scss';
import AuthorItem from '../../components/AuthorItem/AuthorItem';
import { useGetAllAuthorsQuery } from '@/redux/services/author';

const Results = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ua';
  const { data: authors, isSuccess } = useGetAllAuthorsQuery(lang);
  return (
    <div className={styles.results}>
      {isSuccess &&
        authors.map((author) => <AuthorItem key={author.id} author={author} />)}
    </div>
  );
};

export default Results;
