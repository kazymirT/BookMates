import { useNavigate } from 'react-router-dom';

import { type LoginValues, type RegisterValues } from '../utils/validateSchema';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation, useRegisterMutation } from '@/redux/services/auth';
import { Error } from '@/redux/services/services.types';
import { redirectPath, toggleModal } from '@/redux/slices/modalSlice';

export const useFormActions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const path = useAppSelector(redirectPath);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const doRequest = async () => {
    const p = await new Promise<string>((resolve) => {
      const resData = 'success';
      setTimeout(() => resolve(resData), 2000);
    });
    return p;
  };

  const loginUser = async (data: LoginValues) => {
    try {
      await login(data).unwrap();
      path && navigate(path);
    } catch (error) {
      const { originalStatus } = error as Error;
      if (originalStatus === 401) {
        return true;
      }
    }
  };
  const registerUser = async ({
    email,
    firstName,
    lastName,
    password,
  }: RegisterValues) => {
    try {
      await register({
        email,
        firstName,
        lastName,
        password,
      }).unwrap();
      path && navigate(path);
    } catch (error) {
      const { status } = error as Error;
      if (status === 400) {
        return true;
      }
    }
  };
  const sendFeedback = async () => {
    try {
      const response = await doRequest();
      dispatch(toggleModal({ openedModalType: null }));
      response && navigate(path);
      return await response;
    } catch (error) {
      // return 'Error';
    }
  };
  const sendResetPassword = async () => {
    try {
      const response = await doRequest();
      dispatch(toggleModal({ openedModalType: null }));
      response && navigate(path);
      return await response;
    } catch (error) {
      // return 'Error';
    }
  };

  return { loginUser, registerUser, sendFeedback, sendResetPassword };
};
