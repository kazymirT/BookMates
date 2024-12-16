import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setup } from './helper';
import { BUTTON_CLOSE_ID } from '../constants';

describe('FeedbackForm: Component Rendering', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render all form elements correctly', () => {
    const { getByTestId, getByText, getByRole, getByPlaceholderText } = setup();

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Support');
    expect(
      getByText(
        'Leave your email address, ask a question and we will get back to you as soon as possible.'
      )
    ).toBeInTheDocument();
    expect(getByTestId(BUTTON_CLOSE_ID)).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'email' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Send' })).toBeInTheDocument();
    expect(getByPlaceholderText('Your question')).toBeInTheDocument();
    expect(getByRole('combobox')).toBeInTheDocument();
    expect(getByText('Topic')).toBeInTheDocument();
  });

  it('should handle close button click', async () => {
    const user = userEvent.setup();
    const { getByTestId, mockDispatch } = setup();
    const closeBtn = getByTestId(BUTTON_CLOSE_ID);

    await user.click(closeBtn);

    expect(mockDispatch).toHaveBeenCalledOnce();
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: { openedModalType: null },
      type: 'modal/toggleModal',
    });
  });
});

describe('FeedbackForm: Field Validations', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should validate email input field', async () => {
    const user = userEvent.setup();
    const inputError = 'This field is required';
    const emailCorrect = 'testEmail@gmail.com';
    const emailMaxIncorrect = 'dsdsd@dds.comsssssssssssssssssss';

    const { getByText, queryByText, getByRole } = setup();
    const email = getByRole('textbox', { name: 'email' });
    const emailSpan = getByText('Email');

    await user.click(emailSpan);
    await user.tab();
    expect(queryByText(inputError)).toBeInTheDocument();

    await user.click(emailSpan);
    await user.type(email, emailCorrect);
    expect(queryByText(inputError)).not.toBeInTheDocument();

    await user.click(emailSpan);
    await user.type(email, emailMaxIncorrect);
    expect(
      queryByText('The maximum number of characters is 30')
    ).toBeInTheDocument();
  });

  it('should validate textarea input', async () => {
    const textareaError = 'minimum 5 characters';
    const user = userEvent.setup();
    const { queryByText, getByPlaceholderText } = setup();
    const textarea = getByPlaceholderText('Your question');

    await user.click(textarea);
    await user.tab();
    expect(queryByText(textareaError)).toBeInTheDocument();
    expect(textarea).toHaveClass('textarea-error');

    await user.type(textarea, 'dddddss');
    expect(textarea).not.toHaveClass('textarea-error');
    expect(queryByText(textareaError)).not.toBeInTheDocument();
  });

  it('should validate select field', async () => {
    const selectError = 'This field is required.';
    const user = userEvent.setup();
    const { queryByText, getByText } = setup();
    const select = getByText('Topic');

    await user.click(select);
    await user.click(getByText('Send'));
    expect(queryByText(selectError)).toBeInTheDocument();
  });
});

describe('FeedbackForm: Submission Workflow', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should enable submit button and handle form submission correctly', async () => {
    const user = userEvent.setup();
    const emailCorrect = 'testEmail@gmail.com';
    const textareaMessage = 'test message';

    const {
      getByText,
      getByPlaceholderText,
      getByRole,
      mockSendFeedback,
      mockDispatch,
    } = setup();

    mockSendFeedback.mockResolvedValueOnce('string');
    const email = getByRole('textbox', { name: 'email' });
    const emailSpan = getByText('Email');
    const textarea = getByPlaceholderText('Your question');
    const select = getByText('Topic');
    const btnSend = getByText('Send');

    expect(btnSend).toBeDisabled();

    await user.click(emailSpan);
    await user.type(email, emailCorrect);
    await user.type(textarea, textareaMessage);
    await user.click(select);
    await user.click(getByText('Payment and delivery'));

    expect(btnSend).toBeEnabled();

    await user.click(btnSend);

    expect(mockSendFeedback).toHaveBeenCalledOnce();
    expect(mockSendFeedback).toHaveBeenCalledWith();

    expect(mockDispatch).toHaveBeenCalledTimes(3);
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: 'loading',
      type: 'status/toggleStatus',
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: 'idle',
      type: 'status/toggleStatus',
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: { openedModalType: 'feedback-success' },
      type: 'modal/toggleModal',
    });
  });
});
