import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Portal.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { toggleModal } from '@/redux/slices/modalSlice';

const Portal = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const dispatch = useAppDispatch();

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const id = target.id;
    id === 'portal' && dispatch(toggleModal(null));
  };

  return (
    <>
      {createPortal(
        <div
          id="portal"
          className={styles.wrapper}
          onClick={(e) => handleCloseModal(e)}
        >
          <div className={styles.container}>{children}</div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Portal;
