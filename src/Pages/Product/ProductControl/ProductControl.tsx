import Skeleton from 'react-loading-skeleton';

import styles from '../Product.module.scss';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
  Position,
} from '@/components/ui-components/Button/constants';
import { ButtonIcon } from '@/components/ui-components/ButtonIcon/ButtonIcon';
import { Icon } from '@/components/ui-components/Icons';
import { useAppDispatch } from '@/redux/hooks';
import { toggleShowCartNotification } from '@/redux/slices/cartNotificationSlice';
import { toggleModal } from '@/redux/slices/modalSlice';

const ProductControl = ({ price }: { price?: number }) => {
  const dispatch = useAppDispatch();
  const handleAddCart = () => {
    dispatch(toggleShowCartNotification(true));
  };
  const handleOpenOrderSuccess = () =>
    dispatch(toggleModal({ openedModalType: 'order-success' }));

  return (
    <div className={styles.control}>
      {price ? (
        <>
          <p className={styles.price}>{price}</p>
          <div className={styles.btns}>
            <Button
              buttonType={ButtonType.Button}
              size={Sizes.ExtraLarge}
              text="Купити зараз"
              variant={Variant.Basic}
              onClick={handleOpenOrderSuccess}
            />
            <ButtonIcon
              buttonType={ButtonType.Button}
              text="До кошика"
              variant={Variant.Primary}
              iconPosition={Position.Left}
              size={Sizes.Large}
              onClick={handleAddCart}
              icon={<Icon.Cart />}
            />
          </div>
        </>
      ) : (
        <Skeleton width={218} height={48} count={3} />
      )}
    </div>
  );
};

export default ProductControl;
