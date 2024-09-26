import FeedbackSuccess from './FeedbackSuccess/FeedbackSuccess';
import OrderSuccess from './OrderSuccess/OrderSuccess';
import ResetPassword from './ResetPassword/ResetPassword';
import UserInfo from './UserInfo/UserInfo';
import UserNotAuthorizedInfo from './UserNotAuthorizedInfo/UserNotAuthorizedInfo';
import AddCategory from '../Forms/Admin/AddAttributes';
import AddBook from '../Forms/Admin/AddBook';
import EditCategory from '../Forms/Admin/EditAttributes';
import EditBook from '../Forms/Admin/EditBook';
import OrderEdit from '../Forms/Admin/OrderEdit';
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
      ) : openedModalType === 'order-success' ? (
        <OrderSuccess />
      ) : openedModalType === 'reset-password' ? (
        <ResetPassword />
      ) : openedModalType === 'edit-book' ? (
        <EditBook />
      ) : openedModalType === 'add-book' ? (
        <AddBook />
      ) : openedModalType === 'add-attributes' ? (
        <AddCategory />
      ) : openedModalType === 'edit-attributes' ? (
        <EditCategory />
      ) : openedModalType === 'user-info' ? (
        <UserInfo />
      ) : openedModalType === 'userNotAuthorized-info' ? (
        <UserNotAuthorizedInfo />
      ) : openedModalType === 'edit-order' ? (
        <OrderEdit />
      ) : null}
    </Portal>
  );
};

export default Modal;
