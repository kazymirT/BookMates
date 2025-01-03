import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import { BUTTON_CLOSE_ID } from '../constants';

describe('LoginForm component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe('Initial rendering', () => {
    it('should render all required elements', () => {
      const { getByRole, getByTestId, getByText } = setup();
      expect(getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(
        getByRole('button', { name: 'I don’t have an account' })
      ).toBeInTheDocument();
      expect(
        getByRole('button', { name: 'I forgot my password' })
      ).toBeInTheDocument();
      expect(getByTestId(BUTTON_CLOSE_ID)).toBeInTheDocument();
      expect(getByTestId('input password button')).toBeInTheDocument();
      expect(getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
      expect(getByRole('button', { name: 'Sign In' })).toBeDisabled();

      expect(getByText('Email')).toBeInTheDocument();
      expect(getByText('Password')).toBeInTheDocument();
    });
  });

  describe('Button interactions', () => {
    it('should handle click on "create account" button', async () => {
      const user = userEvent.setup();
      const { getByRole, mockDispatch } = setup();

      const button = getByRole('button', { name: 'I don’t have an account' });
      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(mockDispatch).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: 'create-account' },
        type: 'modal/toggleModal',
      });
    });

    it('should handle click on "forgot password" button', async () => {
      const user = userEvent.setup();
      const { getByRole, mockDispatch } = setup();

      const button = getByRole('button', { name: 'I forgot my password' });
      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(mockDispatch).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: 'reset-password' },
        type: 'modal/toggleModal',
      });
    });

    it('should handle click on "close" button', async () => {
      const user = userEvent.setup();
      const { getByTestId, mockDispatch } = setup();

      const button = getByTestId(BUTTON_CLOSE_ID);
      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(mockDispatch).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: null },
        type: 'modal/toggleModal',
      });
    });
  });

  describe('Validation logic', () => {
    it('should display required error for empty email', async () => {
      const user = userEvent.setup();
      const { getByText, queryByText, getByRole } = setup();

      const emailSpan = getByText('Email');

      expect(emailSpan).toBeInTheDocument();

      await user.click(emailSpan);

      const emailInput = getByRole('textbox') as HTMLInputElement;
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveFocus();
      expect(queryByText('This field is required')).not.toBeInTheDocument();

      await user.tab();
      expect(emailInput).not.toHaveFocus();
      expect(queryByText('This field is required')).toBeInTheDocument();
    });

    it('should validate email format and max length', async () => {
      const emailIncorrectError = 'Email format is incorrect';
      const emailMaxError = 'The maximum number of characters is 30';
      const emailCorrect = 'testEmail@gmail.com';
      const emailIncorrect = 'testEmailgmail.com';
      const user = userEvent.setup();
      const { getByText, queryByText, getByRole } = setup();

      const emailSpan = getByText('Email');
      const emailInput = getByRole('textbox') as HTMLInputElement;

      expect(emailSpan).toBeInTheDocument();

      await user.click(emailSpan);

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveFocus();
      expect(queryByText(emailIncorrectError)).not.toBeInTheDocument();

      await user.type(emailInput, emailIncorrect);
      await user.tab();

      expect(queryByText(emailIncorrectError)).toBeInTheDocument();
      expect(emailInput).toHaveClass('input-error');

      await user.type(emailInput, 'wwewewewewe@dsds.comdddddddddddddddddddd');
      expect(queryByText(emailMaxError)).toBeInTheDocument();

      await user.clear(emailInput);
      await user.type(emailInput, emailCorrect);
      await user.tab();

      expect(queryByText(emailIncorrectError)).not.toBeInTheDocument();
      expect(emailInput).toHaveClass('input-valid');
    });

    it('should validate password requirements', async () => {
      const passwordError = 'This field is required';
      const lowerCaseError = 'at least one lowercase letter';
      const upperCaseError = 'at least one capital letter';
      const user = userEvent.setup();
      const { getByText, queryByText, getByLabelText } = setup();

      const passwordSpan = getByText('Password');
      const passwordInput = getByLabelText('password');

      expect(passwordInput).toBeInTheDocument();

      await user.click(passwordSpan);

      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveFocus();
      expect(queryByText(passwordError)).not.toBeInTheDocument();

      await user.tab();

      expect(queryByText(passwordError)).toBeInTheDocument();
      expect(passwordInput).toHaveClass('input-error');

      await user.type(passwordInput, 'S');
      expect(queryByText(lowerCaseError)).toBeInTheDocument();

      await user.clear(passwordInput);
      await user.type(passwordInput, 's');
      expect(queryByText(upperCaseError)).toBeInTheDocument();
    });
  });

  describe('Form submission', () => {
    it('should handle successful login submission', async () => {
      const user = userEvent.setup();
      const validEmail = 'test2024@gmail.com';
      const validPassword = 'Qq1qqqqqqq';
      const serverErrorMessage =
        'Your email or password is incorrect. Please try again or';
      const serverErrorBtnMessage = 'change password.';
      const {
        mockDispatch,
        mockLoginUser,
        getByText,
        getByRole,
        queryByText,
        getByLabelText,
      } = setup();
      mockLoginUser.mockResolvedValueOnce(true);

      const passwordInput = getByLabelText('password');
      const emailInput = getByRole('textbox') as HTMLInputElement;

      expect(getByRole('button', { name: 'Sign In' })).toBeDisabled();

      await user.type(emailInput, validEmail);
      await user.type(passwordInput, validPassword);

      expect(getByRole('button', { name: 'Sign In' })).toBeEnabled();
      await user.click(getByRole('button', { name: 'Sign In' }));

      expect(mockLoginUser).toHaveBeenCalledWith({
        email: validEmail,
        password: validPassword,
      });

      expect(getByText(serverErrorMessage)).toBeInTheDocument();

      const btnResetPassword = getByRole('button', {
        name: serverErrorBtnMessage,
      });

      await user.click(btnResetPassword);

      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: 'reset-password' },
        type: 'modal/toggleModal',
      });

      await user.click(emailInput);
      expect(queryByText(serverErrorMessage)).not.toBeInTheDocument();
    });
  });
});
