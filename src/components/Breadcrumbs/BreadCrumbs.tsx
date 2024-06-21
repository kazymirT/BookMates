import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

type Props = {
  options: { to: string; name: string }[];
  activeLastLink: boolean;
};

const Breadcrumbs = ({ options, activeLastLink }: Props) => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to={'/'}>Головна</Link>
      </li>
      {options.map((option, index) => (
        <li key={index}>
          <span>/</span>
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
