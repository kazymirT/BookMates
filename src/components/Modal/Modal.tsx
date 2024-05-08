import LoginForm from '../Forms/LoginForm/LoginForm';
import RegisterForm from '../Forms/RegisterForm/RegisterForm';
import Portal from '../Portal/Portal';
import { useAppSelector } from '@/redux/hooks';
import { modalType } from '@/redux/slices/modalSlice';

const Modal = () => {
  const openedModalType = useAppSelector(modalType);
  return (
    <>
      {openedModalType && (
        <Portal>
          {openedModalType === 'login' ? (
            <LoginForm />
          ) : openedModalType === 'create-account' ? (
            <RegisterForm />
          ) : openedModalType === 'feedback' ? (
            <div>Feedback</div>
          ) : null}
        </Portal>
      )}
    </>
  );
};

export default Modal;
