import OrderList from './components/OrderList/OrderList';
import styles from './Orders.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Orders = () => {
  return (
    <div className={styles.orders}>
      <Menu
        title={
          <Title text="Ваші замовлення" size="full" textPosition="center" />
        }
        body={<OrderList />}
      />
    </div>
  );
};

export default Orders;
