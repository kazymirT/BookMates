import { FC } from 'react';

import styles from './DeletePopup.module.scss';
import { DeletePopupProps } from './DeletePopup.types';
import { Button } from '../ui-components/Button/Button';
import { Sizes, Variant } from '../ui-components/Button/constants';

const DeletePopup: FC<DeletePopupProps> = ({ onClose, onDelete }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.content}>
        <h3>Ви впевнені?</h3>
        <div className={styles.btns}>
          <Button
            type="button"
            size={Sizes.Medium}
            text="Так"
            onClick={onDelete}
            variant={Variant.Accent}
          />
          <Button
            type="button"
            size={Sizes.Medium}
            text="Ні"
            onClick={onClose}
            variant={Variant.Basic}
          />
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
