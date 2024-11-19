import { FC, useMemo } from 'react';

import PaginationArrow from './components/PaginationArrow';
import PaginationButton from './components/PaginationButton';
import styles from './Pagination.module.scss';
import { PaginationProps } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { setPage } from '@/redux/slices/queryParams';

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const dispatch = useAppDispatch();

  const handlePageClick = (page: number) => {
    dispatch(setPage(String(page)));
  };

  const pageArray = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages]
  );

  return (
    <ul className={styles.pagination}>
      <PaginationArrow
        direction="prev"
        isDisabled={currentPage === 0}
        onClick={() => handlePageClick(currentPage)}
      />
      {pageArray.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={currentPage + 1 === page}
          onClick={() => handlePageClick(page)}
        />
      ))}
      <PaginationArrow
        direction="next"
        isDisabled={currentPage + 1 === totalPages}
        onClick={() => handlePageClick(currentPage + 2)}
      />
    </ul>
  );
};

export default Pagination;
