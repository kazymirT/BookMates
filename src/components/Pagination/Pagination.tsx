import './Pagination.scss';

import ReactPaginate from 'react-paginate';

import ArrowIcon from '../svg/arrow/Arrow';
import { useAppDispatch } from '@/redux/hooks';
import { setPage } from '@/redux/slices/queryParams';

type Props = {
  totalPages: number;
  currentPage: number;
};

const Pagination = ({ totalPages, currentPage }: Props) => {
  const dispatch = useAppDispatch();
  const handlePageClick = (selectedItem: { selected: number }) => {
    const newPage = String(selectedItem.selected + 1);
    dispatch(setPage(newPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ReactPaginate
        nextLabel={<ArrowIcon />}
        onPageChange={handlePageClick}
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={totalPages}
        previousLabel={<ArrowIcon />}
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        className={'pagination'}
        pageLinkClassName={'item'}
        activeLinkClassName={'active'}
        nextLinkClassName={'next'}
        previousLinkClassName={'previous'}
        disabledLinkClassName={'disabled-link'}
        breakLinkClassName={'item break'}
      />
    </>
  );
};

export default Pagination;
