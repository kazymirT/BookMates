export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export interface PaginationArrowProps {
  direction: 'prev' | 'next';
  isDisabled: boolean;
  onClick: () => void;
}

export interface PaginationButtonProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
}
