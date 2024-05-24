import { useNavigate } from 'react-router-dom';

import {
  type LoginValues,
  type RegisterValues,
  type FeedbackValues,
} from '../utils/validateSchema';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLoginMutation, useRegisterMutation } from '@/redux/services/auth';
import { Error } from '@/redux/services/services.types';
import { redirectPath, toggleModal } from '@/redux/slices/modalSlice';
import { User } from '@/redux/slices/userSlice';

export const useFormActions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const path = useAppSelector(redirectPath);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const doRequest = async (
    data: LoginValues | RegisterValues | FeedbackValues
  ) => {
    const p = await new Promise<User | string>((resolve) => {
      let resData: User | string;
      if ((data as RegisterValues).firstName) {
        resData = {
          id: '999',
          role: 'ROLE_PERSONAL',
          firstName: 'John',
          lastName: 'Doe',
        };
      } else if ((data as FeedbackValues).question) {
        resData = 'succes';
      } else {
        resData = {
          id: '666',
          role: 'ROLE_PERSONAL',
          firstName: 'John',
          lastName: 'Doe',
        };
      }
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
  const sendFeedback = async (data: FeedbackValues) => {
    try {
      const response = (await doRequest(data)) as string;
      dispatch(toggleModal({ openedModalType: null }));
      response && navigate(path);
    } catch (error) {
      return 'Error';
    }
  };

  return { loginUser, registerUser, sendFeedback };
};
