import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useVerifyEmailMutation } from '@/redux/services/authNewApi';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const [verifyEmail] = useVerifyEmailMutation();

  useEffect(() => {
    const verify = async () => {
      if (token) {
        await verifyEmail({
          code: token,
        });
        navigate('/');
      }
    };
    verify();
  }, [navigate, token, verifyEmail]);
  return <div>Verifying email...</div>;
};

export default VerifyEmail;
