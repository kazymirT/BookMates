import { NavLink } from 'react-router-dom';

import styles from './Filter.module.scss';

type Props = {
  title: string;
  filters: {
    id: number;
    name: string;
  }[];
};

const Filter = ({ filters, title }: Props) => {
  return (
    <div className={styles.filter}>
      <h3>{title}</h3>
      <ul className={styles.navigate}>
        {filters &&
          filters.map((filter) => (
            <li key={filter.id}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to={`/catalog/${filter.id}`}
              >
                {filter.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Filter;
