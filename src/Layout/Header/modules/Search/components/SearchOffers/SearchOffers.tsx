import { useTranslation } from 'react-i18next';

import { SEARCH_OFFERS } from './data';
import styles from './SearchOffers.module.scss';

const SearchOffers = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.offers}>
      <h3>{t('header.search.offers')}</h3>
      <ul className={styles['offers_lists']}>
        {SEARCH_OFFERS.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchOffers;
