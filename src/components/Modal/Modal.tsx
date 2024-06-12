import FeedbackSuccess from './FeedbackSuccess/FeedbackSuccess';
import RegisterSuccess from './RegisterSuccess/RegisterSuccess';
import ResetPassword from './ResetPassword/ResetPassword';
import FeedBackForm from '../Forms/FeedbackForm/FeedBackForm';
import LoginForm from '../Forms/LoginForm/LoginForm';
import RegisterForm from '../Forms/RegisterForm/RegisterForm';
import Portal from '../Portal/Portal';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { modalType, toggleModal } from '@/redux/slices/modalSlice';

const Modal = () => {
  const openedModalType = useAppSelector(modalType);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModal({ openedModalType: null }));
  };
  return (
    <Portal
      isOpen={!!openedModalType}
      placeContent="center"
      onClickOutside={handleCloseModal}
    >
      {openedModalType === 'login' ? (
        <LoginForm />
      ) : openedModalType === 'create-account' ? (
        <RegisterForm />
      ) : openedModalType === 'feedback' ? (
        <FeedBackForm />
      ) : openedModalType === 'feedback-success' ? (
        <FeedbackSuccess />
      ) : openedModalType === 'register-success' ? (
        <RegisterSuccess />
      ) : openedModalType === 'reset-password' ? (
        <ResetPassword />
      ) : null}
    </Portal>
  );
};

export default Modal;
