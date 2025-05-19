import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/ui-components/Button/Button';
import { Sizes, Variant } from '@/components/ui-components/Button/constants';
import { useUnsubscribeMutation } from '@/redux/services/subscriber';

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [unsubscribe] = useUnsubscribeMutation();

  const handleOnUnsubscribe = async () => {
    if (token) {
      try {
        await unsubscribe({
          token,
          reason: 'text',
        });
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Button
      size={Sizes.Full}
      variant={Variant.Basic}
      text="Unsubscribe"
      onClick={handleOnUnsubscribe}
    />
  );
};

export default Unsubscribe;
