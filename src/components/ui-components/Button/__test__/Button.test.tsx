import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, afterEach, vi } from 'vitest';

import { Icon } from '../../Icons';
import { Button } from '../Button';
import styles from '../Button.module.scss';
import { Sizes, Variant } from '../constants';

const types = ['button', 'submit', 'reset'];

describe('Button', async () => {
  afterEach(() => {
    cleanup();
  });
  it('renders button with provided text', () => {
    const { getByText, getByRole } = render(
      <Button
        type="button"
        size={Sizes.Small}
        variant={Variant.Basic}
        text="submit"
      />
    );
    expect(getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(getByText('submit')).toBeInTheDocument();
  });
  it('should disable the button when disabled is true', () => {
    const { getByText } = render(
      <Button
        text="disabled"
        size={Sizes.Small}
        variant={Variant.Accent}
        type="button"
        disabled={true}
      />
    );
    expect(getByText('disabled')).toBeDisabled();
  });
  it('should disable the button when disabled is false', () => {
    const { getByText } = render(
      <Button
        text="disabled"
        size={Sizes.Small}
        variant={Variant.Accent}
        type="button"
        disabled={false}
      />
    );
    expect(getByText('disabled')).not.toBeDisabled();
  });
  it('applies correct classes for size and variant props', () => {
    const { getByText } = render(
      <Button
        text="Upgrade"
        size={Sizes.Small}
        variant={Variant.Basic}
        type="button"
      />
    );
    const buttonElement = getByText('Upgrade');
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(styles[`button--basic`]);
    expect(buttonElement).toHaveClass(styles['button--s']);
  });
  it('triggers onClick handler when button is clicked', async () => {
    const onClickMock = vi.fn();
    const user = userEvent.setup();
    const { getByText } = render(
      <Button
        text="Purchase"
        size={Sizes.Small}
        variant={Variant.Accent}
        type="button"
        onClick={onClickMock}
      />
    );

    await user.click(getByText('Purchase'));
    await user.click(getByText('Purchase'));
    await user.click(getByText('Purchase'));
    expect(onClickMock).toHaveBeenCalledTimes(3);
  });
  it('render button with icon', async () => {
    const { getByTestId } = render(
      <Button
        text=""
        size={Sizes.Small}
        variant={Variant.Icon}
        type="button"
        data-testid="button-id"
        icon={<Icon.Plus dataTestid="icon-id" />}
      />
    );
    expect(getByTestId('icon-id')).toBeInTheDocument();
    expect(getByTestId('button-id')).toBeInTheDocument();
  });
  types.forEach((type) => {
    it(`renders button with type '${type}'`, () => {
      const { getByTestId } = render(
        <Button
          size={Sizes.Card}
          variant={Variant.Accent}
          type={type as 'button' | 'submit' | 'reset'}
          text={type}
          data-testid="button-type"
        />
      );
      expect(getByTestId('button-type')).toHaveAttribute('type', type);
    });
  });
});
