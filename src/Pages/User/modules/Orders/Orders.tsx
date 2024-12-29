import { useTranslation } from 'react-i18next';

import OrderList from './components/OrderList/OrderList';
import styles from './Orders.module.scss';
import Title from '../../components/Title/Title';
import Menu from '../Menu/Menu';

const Orders = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.orders}>
      <Menu
        title={
          <Title text={t('user.orders')} size="full" textPosition="center" />
        }
        body={<OrderList />}
      />
    </div>
  );
};

export default Orders;
