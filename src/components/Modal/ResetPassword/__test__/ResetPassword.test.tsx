import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import { BUTTON_CLOSE_ID } from '../constants';

describe('ResetPasswordForm component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe('Initial rendering', () => {
    it('should render all required elements', () => {
      const { getByRole, getByTestId, getByText } = setup();
      expect(getByRole('heading', { level: 2 })).toHaveTextContent(
        'Reset Password'
      );
      expect(
        getByRole('button', { name: 'Reset Password' })
      ).toBeInTheDocument();
      expect(
        getByRole('button', { name: 'I remembered my password' })
      ).toBeInTheDocument();
      expect(getByTestId(BUTTON_CLOSE_ID)).toBeInTheDocument();
      expect(
        getByText(
          'Leave your email address, ask a question and we will get back to you as soon as possible.'
        )
      ).toBeInTheDocument();
      expect(getByText('Email')).toBeInTheDocument();
    });
  });

  describe('Button interactions', () => {
    it('should handle click on "create account" button', async () => {
      const user = userEvent.setup();
      const { getByRole, mockDispatch } = setup();

      const button = getByRole('button', { name: 'I remembered my password' });
      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(mockDispatch).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: 'login' },
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
  });

  describe('Form submission', () => {
    it('should handle successful resetPassword submission', async () => {
      const user = userEvent.setup();
      const validEmail = 'test2024@gmail.com';
      const { mockDispatch, mockSendResetPassword, getByRole } = setup();
      mockSendResetPassword.mockResolvedValueOnce(true);

      const emailInput = getByRole('textbox') as HTMLInputElement;

      expect(getByRole('button', { name: 'Reset Password' })).toBeDisabled();

      await user.type(emailInput, validEmail);

      expect(getByRole('button', { name: 'Reset Password' })).toBeEnabled();
      await user.click(getByRole('button', { name: 'Reset Password' }));

      expect(mockSendResetPassword).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledTimes(2);
      expect(mockSendResetPassword).toHaveBeenCalledWith();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: 'loading',
        type: 'status/toggleStatus',
      });
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: 'succes',
        type: 'status/toggleStatus',
      });
    });
  });
});
