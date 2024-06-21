import { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

import styles from './Filter.module.scss';
import { FilterProps } from '../../Catalog.types';

export function InlineWrapperWithMargin({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <span style={{ marginBottom: '1rem', display: 'block' }}>{children}</span>
  );
}

const Filter = ({ filters, title }: FilterProps) => {
  return (
    <div className={styles.filter}>
      <h3>{title}</h3>
      <ul className={styles.navigate}>
        {filters ? (
          filters.map((filter) => (
            <li key={filter.id}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : '')}
                to={`/catalog/${filter.id}?page=1`}
              >
                {filter.name}
              </NavLink>
            </li>
          ))
        ) : (
          <Skeleton
            count={13}
            width={250}
            height={48}
            wrapper={InlineWrapperWithMargin}
          />
        )}
      </ul>
    </div>
  );
};

export default Filter;
