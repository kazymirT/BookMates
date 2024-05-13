import { useNavigate } from 'react-router-dom';

import {
  type LoginValues,
  type RegisterValues,
  type FeedbackValues,
} from '../utils/validateSchema';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleModal, redirectPath } from '@/redux/slices/modalSlice';
import { login, type User } from '@/redux/slices/userSlice';

export const useFormActions = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const path = useAppSelector(redirectPath);

  const doRequest = async (
    data: LoginValues | RegisterValues | FeedbackValues
  ) => {
    const p = await new Promise<User | string>((resolve) => {
      let resData: User | string;
      if ((data as RegisterValues).name) {
        resData = { id: '999', role: 'user' };
      } else if ((data as FeedbackValues).question) {
        resData = 'succes';
      } else {
        resData = { id: '666', role: 'user' };
      }
      setTimeout(() => resolve(resData), 2000);
    });
    return p;
  };

  const loginUser = async (data: LoginValues) => {
    try {
      const response = (await doRequest(data)) as User;
      dispatch(login(response));
      dispatch(toggleModal({ openedModalType: null }));
      path && navigate(path);
    } catch (error) {
      return 'Error';
    }
  };
  const registerUser = async (data: RegisterValues) => {
    try {
      const response = (await doRequest(data)) as User;
      dispatch(login(response));
      dispatch(toggleModal({ openedModalType: null }));
      path && navigate(path);
    } catch (error) {
      return 'Error';
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
