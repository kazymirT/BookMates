import Lottie, { Options, EventListener } from 'react-lottie';

import animationData from '@/assets/animations/Done.json';
import { useAppDispatch } from '@/redux/hooks';
import { toggleStatus } from '@/redux/slices/statusSlice';

type SuccesProps = {
  loop: boolean;
};

const Succes = ({ loop }: SuccesProps) => {
  const dispatch = useAppDispatch();

  const defaultOptions: Options = {
    loop,
    autoplay: true,
    animationData: animationData,
  };
  const eventsHandler: EventListener = {
    eventName: 'complete',
    callback: () => dispatch(toggleStatus('idle')),
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        eventListeners={[eventsHandler]}
      />
    </div>
  );
};

export default Succes;
