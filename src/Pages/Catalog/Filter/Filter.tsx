import { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

import styles from './Filter.module.scss';
import { CategoryAll } from '@/redux/services/services.types';

type Props = {
  title: string;
  filters?: CategoryAll[];
};

export function InlineWrapperWithMargin({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <span style={{ marginBottom: '1rem', display: 'block' }}>{children}</span>
  );
}

const Filter = ({ filters, title }: Props) => {
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
