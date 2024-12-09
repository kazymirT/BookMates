import { OVERLAY_TEST_ID } from './constants';
import styles from './Overlay.module.scss';
import { useAppSelector } from '@/redux/hooks';
import { isActive } from '@/redux/slices/overlay';

const Overlay = () => {
  const isActiveOverlay = useAppSelector(isActive);
  return (
    <>
      {isActiveOverlay && (
        <div className={styles.overlay} data-testid={OVERLAY_TEST_ID}></div>
      )}
    </>
  );
};

export default Overlay;
