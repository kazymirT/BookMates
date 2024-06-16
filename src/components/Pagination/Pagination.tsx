import ReactPaginate from 'react-paginate';

import './Pagination.scss';
import ArrowIcon from '../svg/arrow/Arrow';

type Props = {
  totalPages: number;
  currentPage: number;
  onChange: (nextPage: number) => void;
};

const Pagination = ({ totalPages, currentPage, onChange }: Props) => {
  const handlePageClick = (selectedItem: { selected: number }) => {
    onChange(selectedItem.selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ReactPaginate
        nextLabel={<ArrowIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={<ArrowIcon />}
        renderOnZeroPageCount={null}
        initialPage={currentPage}
        className={'pagination'}
        pageLinkClassName={'item'}
        activeLinkClassName={'active'}
        nextLinkClassName={'next'}
        previousLinkClassName={'previous'}
        disabledLinkClassName={'disabled-link'}
      />
    </>
  );
};

export default Pagination;
