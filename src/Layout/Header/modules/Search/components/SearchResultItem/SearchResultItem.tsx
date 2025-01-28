import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchResultItem.module.scss';
import { type SearchResultItemProps } from './types';
import Price from '@/components/Price/Price';

const SearchResultItem: FC<SearchResultItemProps> = ({
  id,
  title,
  imageUrl,
  price,
  discountPrice,
  discount,
  onClickItem,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      key={id}
      className={styles.list}
      onClick={onClickItem}
      role="option"
      tabIndex={0}
    >
      <img src={imageUrl} alt={title} width={43} height={66} />
      <div className={styles.content}>
        <h4>{title}</h4>
        <Price
          normalPrice={price}
          discountPrice={discount ? discountPrice : undefined}
          variant="search"
        />
      </div>
    </Link>
  );
};

export default SearchResultItem;
