import styles from '../Product.module.scss';

const ProductDetailItem = ({
  title,
  value,
  children,
}: {
  title: string;
  value?: string | number;
  children?: JSX.Element;
}) => (
  <div>
    <h3>{title}</h3>
    {value ? <p className={styles.item}>{value}</p> : children}
  </div>
);

export default ProductDetailItem;
