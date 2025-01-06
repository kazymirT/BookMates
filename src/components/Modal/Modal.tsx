import { Suspense, lazy } from 'react';

import Portal from '../Portal/Portal';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { modalType, toggleModal } from '@/redux/slices/modalSlice';

const UserInfoLazy = lazy(() => import('./UserInfo/UserInfo'));
const UserNotAuthorizedInfoLazy = lazy(
  () => import('./UserNotAuthorizedInfo/UserNotAuthorizedInfo')
);
const AddCategoryLazy = lazy(() => import('../Forms/Admin/AddAttributes'));
const EditCategoryLazy = lazy(() => import('../Forms/Admin/EditAttributes'));
const AddCollectionLazy = lazy(
  () => import('../../Pages/Admin/modules/Collections/components/AddCollection')
);
const EditCollectionLazy = lazy(
  () =>
    import('../../Pages/Admin/modules/Collections/components/EditCollection')
);
const AddBookLazy = lazy(() => import('../Forms/Admin/AddBook'));
const EditBookLazy = lazy(() => import('../Forms/Admin/EditBook'));

const OrderEditLazy = lazy(() => import('../Forms/Admin/OrderEdit'));
const SubscriptionErrorLazy = lazy(
  () => import('./Subscription/SubscriptionError')
);
const SubscriptionSuccessLazy = lazy(
  () => import('./Subscription/SubscriptionSuccess')
);
const FeedbackSuccessLazy = lazy(
  () => import('./FeedbackSuccess/FeedbackSuccess')
);
const OrderSuccessLazy = lazy(() => import('./OrderSuccess/OrderSuccess'));
const FeedBackFormLazy = lazy(
  () => import('../Forms/FeedbackForm/FeedBackForm')
);
const RegisterFormLazy = lazy(
  () => import('../Forms/RegisterForm/RegisterForm')
);
const LoginFormLazy = lazy(() => import('../Forms/LoginForm/LoginForm'));
const ResetPasswordLazy = lazy(() => import('./ResetPassword/ResetPassword'));

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
      <Suspense>
        {openedModalType === 'login' ? (
          <LoginFormLazy />
        ) : openedModalType === 'create-account' ? (
          <RegisterFormLazy />
        ) : openedModalType === 'feedback' ? (
          <FeedBackFormLazy />
        ) : openedModalType === 'feedback-success' ? (
          <FeedbackSuccessLazy /> // not test
        ) : openedModalType === 'order-success' ? (
          <OrderSuccessLazy /> // not test
        ) : openedModalType === 'reset-password' ? (
          <ResetPasswordLazy />
        ) : openedModalType === 'edit-book' ? (
          <EditBookLazy />
        ) : openedModalType === 'add-book' ? (
          <AddBookLazy />
        ) : openedModalType === 'add-attributes' ? (
          <AddCategoryLazy />
        ) : openedModalType === 'edit-attributes' ? (
          <EditCategoryLazy />
        ) : openedModalType === 'user-info' ? (
          <UserInfoLazy /> // no test
        ) : openedModalType === 'userNotAuthorized-info' ? (
          <UserNotAuthorizedInfoLazy /> // no test
        ) : openedModalType === 'edit-order' ? (
          <OrderEditLazy /> // no test
        ) : openedModalType === 'add-collection' ? (
          <AddCollectionLazy />
        ) : openedModalType === 'subscription-success' ? (
          <SubscriptionSuccessLazy />
        ) : openedModalType === 'subscription-error' ? (
          <SubscriptionErrorLazy />
        ) : openedModalType === 'edit-collection' ? (
          <EditCollectionLazy />
        ) : null}
      </Suspense>
    </Portal>
  );
};

export default Modal;
