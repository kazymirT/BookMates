import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import { BUTTON_CLOSE_ID } from '../constants';

describe('RegisterForm component', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe('Initial rendering', () => {
    it('should render all required elements', () => {
      const { getByRole, getByTestId, getByText } = setup();
      expect(getByRole('heading', { level: 2 })).toHaveTextContent('Sign Up');
      expect(
        getByRole('button', { name: 'I already have an account' })
      ).toBeInTheDocument();
      expect(
        getByRole('button', { name: 'Create an Account' })
      ).toBeInTheDocument();
      expect(getByRole('button', { name: 'Create an Account' })).toBeDisabled();

      expect(getByTestId(BUTTON_CLOSE_ID)).toBeInTheDocument();
      expect(getByTestId('input password button')).toBeInTheDocument();
      expect(getByText('First Name')).toBeInTheDocument();
      expect(getByText('Last Name')).toBeInTheDocument();
      expect(getByText('Email')).toBeInTheDocument();
      expect(getByText('Confirm email')).toBeInTheDocument();
      expect(getByText('Password')).toBeInTheDocument();
      expect(
        getByText(
          'Minimum of 8 characters, without indents or special characters'
        )
      ).toBeInTheDocument();
      expect(
        getByText(
          'By creating an account on Bookmate, I agree to the return policy and offer agreement.'
        )
      ).toBeInTheDocument();
    });
  });

  describe('Button interactions', () => {
    it('should dispatch toggleModal action when "I already have an account" button is clicked', async () => {
      const user = userEvent.setup();
      const { getByRole, mockDispatch } = setup();

      const button = getByRole('button', { name: 'I already have an account' });
      expect(button).toBeInTheDocument();

      await user.click(button);

      expect(mockDispatch).toHaveBeenCalledOnce();
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { openedModalType: 'login' },
        type: 'modal/toggleModal',
      });
    });

    it('should dispatch toggleModal action when "close" button is clicked', async () => {
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
    it('should display error when last name is empty', async () => {
      const lowerCaseError = 'The last name must start with a capital letter';
      const fieldRequiredError = 'This field is required';
      const user = userEvent.setup();
      const { getByLabelText, getByText, queryByText } = setup();

      const lastNameInput = getByLabelText('lastName');
      const lastNameSpan = getByText('Last Name');
      const sendBtn = getByText('Create an Account');

      expect(queryByText(fieldRequiredError)).not.toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(lastNameSpan).toBeInTheDocument();
      expect(sendBtn).toBeInTheDocument();

      await user.click(lastNameSpan);
      await user.click(sendBtn);

      expect(queryByText(fieldRequiredError)).toBeInTheDocument();
      expect(queryByText(lowerCaseError)).not.toBeInTheDocument();

      await user.type(lastNameInput, 's');

      expect(queryByText(fieldRequiredError)).not.toBeInTheDocument();
      expect(queryByText(lowerCaseError)).toBeInTheDocument();
    });
    it('should validate last name for minimum and maximum character limits', async () => {
      const minCharactersError = 'minimum number of characters is 4';
      const maxCharactersError = 'The maximum number of characters is 20';
      const user = userEvent.setup();
      const { getByLabelText, getByText, queryByText } = setup();

      const lastNameInput = getByLabelText('lastName');
      const lastNameSpan = getByText('Last Name');
      const sendBtn = getByText('Create an Account');

      expect(queryByText(minCharactersError)).not.toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(lastNameSpan).toBeInTheDocument();
      expect(sendBtn).toBeInTheDocument();

      await user.click(lastNameSpan);
      await user.type(lastNameInput, 'Ss');
      await user.click(sendBtn);

      expect(queryByText(minCharactersError)).toBeInTheDocument();
      expect(queryByText(maxCharactersError)).not.toBeInTheDocument();

      await user.type(lastNameInput, 'Aaaaaaaaaaaaaaaaaaaaaass');

      expect(queryByText(minCharactersError)).not.toBeInTheDocument();
      expect(queryByText(maxCharactersError)).toBeInTheDocument();
    });
    it('should display error when first name is empty', async () => {
      const lowerCaseError = 'The name must start with a capital letter';
      const fieldRequiredError = 'This field is required';
      const user = userEvent.setup();
      const { getByLabelText, getByText, queryByText } = setup();

      const lastNameInput = getByLabelText('firstName');
      const lastNameSpan = getByText('First Name');
      const sendBtn = getByText('Create an Account');

      expect(queryByText(fieldRequiredError)).not.toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(lastNameSpan).toBeInTheDocument();
      expect(sendBtn).toBeInTheDocument();

      await user.click(lastNameSpan);
      await user.click(sendBtn);

      expect(queryByText(fieldRequiredError)).toBeInTheDocument();
      expect(queryByText(lowerCaseError)).not.toBeInTheDocument();

      await user.type(lastNameInput, 's');

      expect(queryByText(fieldRequiredError)).not.toBeInTheDocument();
      expect(queryByText(lowerCaseError)).toBeInTheDocument();
    });
    it('should validate first name for minimum and maximum character limits', async () => {
      const minCharactersError = 'minimum number of characters is 4';
      const maxCharactersError = 'The maximum number of characters is 20';
      const user = userEvent.setup();
      const { getByLabelText, getByText, queryByText } = setup();

      const lastNameInput = getByLabelText('firstName');
      const lastNameSpan = getByText('First Name');
      const sendBtn = getByText('Create an Account');

      expect(queryByText(minCharactersError)).not.toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(lastNameSpan).toBeInTheDocument();
      expect(sendBtn).toBeInTheDocument();

      await user.click(lastNameSpan);
      await user.type(lastNameInput, 'Ss');
      await user.click(sendBtn);

      expect(queryByText(minCharactersError)).toBeInTheDocument();
      expect(queryByText(maxCharactersError)).not.toBeInTheDocument();

      await user.type(lastNameInput, 'Aaaaaaaaaaaaaaaaaaaaaass');

      expect(queryByText(minCharactersError)).not.toBeInTheDocument();
      expect(queryByText(maxCharactersError)).toBeInTheDocument();
    });
    it('should display required error for empty email field', async () => {
      const user = userEvent.setup();
      const { getByText, queryByText, getByLabelText } = setup();

      const emailSpan = getByText('Email');
      const emailInput = getByLabelText('email');

      expect(emailSpan).toBeInTheDocument();

      await user.click(emailSpan);

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveFocus();
      expect(queryByText('This field is required')).not.toBeInTheDocument();

      await user.tab();
      expect(emailInput).not.toHaveFocus();
      expect(queryByText('This field is required')).toBeInTheDocument();
    });
    it('should display email mismatch error when emails do not match', async () => {
      const validEmail = 'testEmail@gmail.com';
      const validEmail2 = 'testEmail@gmail.comw';
      const emailIncorrect = 'The email address does not match';
      const user = userEvent.setup();
      const { getByText, queryByText, getByLabelText } = setup();

      const emailSpan = getByText('Email');
      const confirmEmailSpan = getByText('Confirm email');

      const emailInput = getByLabelText('email');
      const confirmEmailInput = getByLabelText('confirmEmail');

      expect(emailSpan).toBeInTheDocument();
      expect(confirmEmailSpan).toBeInTheDocument();

      await user.click(emailSpan);

      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveFocus();
      expect(queryByText(emailIncorrect)).not.toBeInTheDocument();

      await user.type(emailInput, validEmail);
      await user.click(confirmEmailSpan);
      await user.type(confirmEmailInput, validEmail2);
      await user.tab();

      expect(queryByText(emailIncorrect)).toBeInTheDocument();

      await user.type(confirmEmailInput, validEmail);

      expect(queryByText(emailIncorrect)).not.toBeInTheDocument();
    });

    it('should validate email format and enforce maximum character limit', async () => {
      const emailIncorrectError = 'Email format is incorrect';
      const emailMaxError = 'The maximum number of characters is 30';
      const emailCorrect = 'testEmail@gmail.com';
      const emailIncorrect = 'testEmailgmail.com';
      const user = userEvent.setup();
      const { getByText, queryByText, getByLabelText } = setup();

      const emailSpan = getByText('Email');

      const emailInput = getByLabelText('email');

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

    it('should validate password for required fields and format requirements', async () => {
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
    it('should display server error for duplicate email during registration and handle "reset password"', async () => {
      const user = userEvent.setup();
      const firstName = 'TestFirstName';
      const lastName = 'TestLastName';
      const validEmail = 'test2024@gmail.com';
      const validPassword = 'Qq1qqqqqqq';
      const checkboxText =
        'By creating an account on Bookmate, I agree to the return policy and offer agreement.';
      const serverErrorMessage = 'An account with this email already exists.';
      const serverErrorBtnMessage = 'I forgot my password';
      const {
        mockDispatch,
        getByText,
        getByRole,
        queryByText,
        getByLabelText,
        mockRegisterUser,
      } = setup();
      mockRegisterUser.mockResolvedValueOnce(true);

      const passwordInput = getByLabelText('password');
      const firstNameInput = getByLabelText('firstName');
      const lastNameInput = getByLabelText('lastName');
      const emailInput = getByLabelText('email');
      const confirmEmailInput = getByLabelText('confirmEmail');

      expect(getByRole('button', { name: 'Create an Account' })).toBeDisabled();
      expect(passwordInput).toBeInTheDocument();
      expect(firstNameInput).toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(confirmEmailInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();

      await user.type(emailInput, validEmail);
      await user.type(confirmEmailInput, validEmail);
      await user.type(passwordInput, validPassword);
      await user.type(firstNameInput, firstName);
      await user.type(lastNameInput, lastName);
      await user.click(getByText(checkboxText));

      expect(getByRole('button', { name: 'Create an Account' })).toBeEnabled();

      await user.click(getByRole('button', { name: 'Create an Account' }));

      expect(mockRegisterUser).toHaveBeenCalledOnce();
      expect(mockRegisterUser).toHaveBeenCalledWith({
        firstName: firstName,
        lastName: lastName,
        email: validEmail,
        confirmEmail: validEmail,
        password: validPassword,
        accept: true,
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
