import { useTranslation } from 'react-i18next';

import styles from './SearchNoResults.module.scss';

const SearchNoResults = () => {
  const { t } = useTranslation();
  return <p className={styles['no-result']}>{t('header.search.no-result')}</p>;
};

export default SearchNoResults;
