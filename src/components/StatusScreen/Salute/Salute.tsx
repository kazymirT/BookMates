import Lottie, { Options, EventListener } from 'react-lottie';

import animationData from '@/assets/animations/file.json';
import { useAppDispatch } from '@/redux/hooks';
import { toggleStatus } from '@/redux/slices/statusSlice';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Salute = () => {
  const dispatch = useAppDispatch();

  const eventsHandler: EventListener = {
    eventName: 'complete',
    callback: () => dispatch(toggleStatus('idle')),
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={246}
        width={246}
        eventListeners={[eventsHandler]}
      />
    </div>
  );
};

export default Salute;
