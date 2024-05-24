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
      ) : null}
    </Portal>
  );
};

export default Modal;
