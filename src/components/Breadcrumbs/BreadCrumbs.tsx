import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

type Props = {
  options: { to: string; name: string }[];
  activeLastLink?: boolean;
};

const Breadcrumbs = ({ options, activeLastLink = false }: Props) => {
  const { t } = useTranslation();
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to={'/'}>{t('breadcrumbs.home')}</Link>
      </li>
      {options.map((option, index) => (
        <li key={index}>
          <span className={styles.separation}>&#8594;</span>
          {index !== options.length - 1 ? (
            <Link to={option.to}>{option.name}</Link>
          ) : activeLastLink ? (
            <Link to={option.to}>{option.name}</Link>
          ) : (
            <span>{option.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
