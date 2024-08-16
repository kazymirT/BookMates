import './Pagination.scss';

import ReactPaginate from 'react-paginate';

import { Icon } from '../ui-components/Icons';
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
  };

  return (
    <>
      <ReactPaginate
        nextLabel={<Icon.Arrow_1 />}
        onPageChange={handlePageClick}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        previousLabel={<Icon.Arrow_1 />}
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
