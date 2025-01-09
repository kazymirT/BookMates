import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18next from 'i18next';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { RadioGroup } from '../RadioGroup';

describe('RadioGroup Component', () => {
  i18next.changeLanguage = vi.fn();

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders title when provided', () => {
    render(<RadioGroup title="Select Language" />);

    expect(screen.getByText('Select Language')).toBeInTheDocument();
  });

  it('renders radio buttons in "title" variant', () => {
    render(<RadioGroup variant="title" />);

    expect(screen.getByLabelText('EN')).toBeInTheDocument();
    expect(screen.getByLabelText('UA')).toBeInTheDocument();
  });

  it('renders RadioForm in "radio" variant', () => {
    render(<RadioGroup variant="radio" />);

    expect(screen.getByText('Українська')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('calls i18next.changeLanguage when handleOnChange is triggered', async () => {
    const user = userEvent.setup();
    render(<RadioGroup variant="title" />);

    const ukrainianRadio = screen.getByLabelText('UA');
    const englishRadio = screen.getByLabelText('EN');

    await user.click(ukrainianRadio);

    expect(i18next.changeLanguage).toHaveBeenCalledWith('uk');

    await user.click(englishRadio);

    expect(i18next.changeLanguage).toHaveBeenCalledWith('en');
  });
  it('calls i18next.changeLanguage when handleOnChangeRadio is triggered', async () => {
    const user = userEvent.setup();
    render(<RadioGroup variant="radio" />);

    const ukrainianOption = screen.getByText('Українська');

    await user.click(ukrainianOption);

    expect(i18next.changeLanguage).toHaveBeenCalledWith('uk');
  });
});
