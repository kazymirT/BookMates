import Loading from './Loading/Loading';
import Succes from './Succes/Succes';
import Portal from '../Portal/Portal';
import { useAppSelector } from '@/redux/hooks';
import { status } from '@/redux/slices/statusSlice';

const StatusScreen = () => {
  const appStatus = useAppSelector(status);

  return (
    <Portal isOpen={appStatus !== 'idle'} placeContent={'center'}>
      {appStatus === 'loading' ? (
        <Loading />
      ) : appStatus == 'succes' ? (
        <Succes />
      ) : null}
    </Portal>
  );
};

export default StatusScreen;
