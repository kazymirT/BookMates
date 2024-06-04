import ReactPaginate from 'react-paginate';

import './Pagination.scss';
import ArrowIcon from '../svg/arrow/Arrow';

type Props = {
  elementsPerPage: number;
  totalElements: number;
  currentPage: number;
  onChange: (nextPage: number) => void;
};

const Pagination = ({
  elementsPerPage,
  totalElements,
  currentPage,
  onChange,
}: Props) => {
  const totalPages = Math.ceil(totalElements / elementsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    onChange(selectedItem.selected);
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
