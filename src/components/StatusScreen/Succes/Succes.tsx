import Lottie, { Options, EventListener } from 'react-lottie';

import animationData from '@/assets/animations/Done.json';
import { useAppDispatch } from '@/redux/hooks';
import { toggleStatus } from '@/redux/slices/statusSlice';

const defaultOptions: Options = {
  loop: false,
  autoplay: true,
  animationData: animationData,
};

const Succes = () => {
  const dispatch = useAppDispatch();

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
