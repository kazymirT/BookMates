import { useTranslation } from 'react-i18next';

import styles from './Collage.module.scss';
import collageBook from '@/assets/images/collage.png';
import { Button } from '@/components/ui-components/Button/Button';
import {
  ButtonType,
  Sizes,
  Variant,
} from '@/components/ui-components/Button/constants';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Collage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const handleOnClick = () =>
    dispatch(toggleModal({ openedModalType: 'create-account' }));

  return (
    <section className={styles.collage}>
      <div className={styles['img-box']}>
        <img src={collageBook} alt="collage books" />
      </div>
      <div className={styles.content}>
        <h2>{t('home.collage.title')}</h2>
        <p>{t('home.collage.description')}</p>
        <Button
          buttonType={ButtonType.Button}
          size={Sizes.Full}
          text={t('home.collage.button')}
          onClick={handleOnClick}
          variant={Variant.Basic}
        />
      </div>
    </section>
  );
};

export default Collage;
