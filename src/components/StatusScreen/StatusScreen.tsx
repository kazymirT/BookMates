import { lazy, Suspense } from 'react';

import Portal from '../Portal/Portal';
import { useAppSelector } from '@/redux/hooks';
import { status } from '@/redux/slices/statusSlice';

const LoadingLazy = lazy(() => import('./Loading/Loading'));
const SuccesLazy = lazy(() => import('./Succes/Succes'));

const StatusScreen = () => {
  const appStatus = useAppSelector(status);

  return (
    <Portal isOpen={appStatus !== 'idle'} placeContent={'center'}>
      <Suspense>
        {appStatus === 'loading' ? (
          <LoadingLazy />
        ) : appStatus == 'succes' ? (
          <SuccesLazy loop={false} />
        ) : null}
      </Suspense>
    </Portal>
  );
};

export default StatusScreen;
