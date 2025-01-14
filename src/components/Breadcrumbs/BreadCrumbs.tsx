import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';
import { BreadCrumbsProps } from './types';
import Skeleton from '../Skeleton/components/Skeleton/Skeleton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearFilters } from '@/redux/slices/queryParams';
import { isLoading } from '@/redux/slices/skeletonSlice';

const Breadcrumbs: FC<BreadCrumbsProps> = ({
  options,
  activeLastLink = false,
}) => {
  const isSkeleton = useAppSelector(isLoading);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const clearFilter = () => dispatch(clearFilters());

  return (
    <ul className={styles.breadcrumbs}>
      {isSkeleton ? (
        <li>
          <Skeleton variant="title" />
        </li>
      ) : (
        <>
          <li>
            <Link to={'/'}>{t('breadcrumbs.home')}</Link>
          </li>
          {options.map(({ name, to }, index) => (
            <li key={index}>
              <span className={styles.separation}>&#8594;</span>
              {index !== options.length - 1 ? (
                <Link
                  to={to}
                  onClick={to === '/catalog' ? clearFilter : undefined}
                >
                  {name}
                </Link>
              ) : activeLastLink ? (
                <Link to={to}>{name}</Link>
              ) : (
                <span>{name}</span>
              )}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default Breadcrumbs;
