import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

type Props = {
  options: { to: string; label: string }[];
};

const Breadcrumbs = ({ options }: Props) => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to={'/'}>Головна</Link>
      </li>
      {options.map((option, index) => (
        <li key={index}>
          <span>/</span>
          {<Link to={option.to}>{option.label}</Link>}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
