import { useAppSelector } from '../../redux/hooks';
import { modalType } from '../../redux/slices/modalSlice';
import Portal from '../Portal/Portal';

const Modal = () => {
  const openedModalType = useAppSelector(modalType);
  return (
    <>
      {openedModalType && (
        <Portal>
          {openedModalType === 'login' ? (
            <div>Login</div>
          ) : openedModalType === 'create-account' ? (
            <div>Create Account</div>
          ) : openedModalType === 'feedback' ? (
            <div>Feedback</div>
          ) : null}
        </Portal>
      )}
    </>
  );
};

export default Modal;
