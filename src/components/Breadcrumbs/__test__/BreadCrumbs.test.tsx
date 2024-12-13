import { cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import { setup } from './helper';

describe('BreadCrumbs', () => {
  afterEach(() => {
    cleanup();
  });

  it('calls clearFilter when clicking a link with /catalog', async () => {
    const user = userEvent.setup();
    const options = [
      { to: '/catalog', name: 'Catalog' },
      { to: '/other', name: 'Other' },
    ];
    const { getByText, mockDispatch } = setup({ options });

    const catalogLink = getByText('Catalog');
    expect(catalogLink).toHaveAttribute('href', '/catalog');

    await user.click(catalogLink);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
  it('renders BreadCrumb', () => {
    const { getByText } = setup();
    const crumb0 = getByText('Home');

    expect(crumb0).toBeInTheDocument();
    expect(crumb0).toHaveAttribute('href', '/');

    expect(crumb0.tagName).toBe('A');
  });
  it('renders BreadCrumbs with options', () => {
    const options = [
      { to: 'url1', name: 'name1' },
      { to: 'url2', name: 'name2' },
      { to: 'url3', name: 'name3' },
    ];
    const { getByText } = setup({ options });
    const crumb0 = getByText('Home');
    const crumb1 = getByText(options[0].name);
    const crumb2 = getByText(options[1].name);
    const crumb3 = getByText(options[2].name);

    expect(crumb0).toBeInTheDocument();
    expect(crumb1).toBeInTheDocument();
    expect(crumb2).toBeInTheDocument();
    expect(crumb3).toBeInTheDocument();

    expect(crumb1).toHaveAttribute('href', `/${options[0].to}`);
    expect(crumb2).toHaveAttribute('href', `/${options[1].to}`);
    expect(crumb3).not.toHaveAttribute('href', `/${options[2].to}`);

    expect(crumb1.tagName).toBe('A');
    expect(crumb2.tagName).toBe('A');
    expect(crumb3.tagName).toBe('SPAN');
  });
  it('renders BreadCrumbs with options', () => {
    const options = [
      { to: 'url1', name: 'name1' },
      { to: 'url2', name: 'name2' },
      { to: 'url3', name: 'name3' },
    ];
    const { getByText } = setup({ options, activeLastLink: true });
    const crumb0 = getByText('Home');
    const crumb1 = getByText(options[0].name);
    const crumb2 = getByText(options[1].name);
    const crumb3 = getByText(options[2].name);

    expect(crumb0).toBeInTheDocument();
    expect(crumb1).toBeInTheDocument();
    expect(crumb2).toBeInTheDocument();
    expect(crumb3).toBeInTheDocument();

    expect(crumb0).toHaveAttribute('href', `/`);
    expect(crumb1).toHaveAttribute('href', `/${options[0].to}`);
    expect(crumb2).toHaveAttribute('href', `/${options[1].to}`);
    expect(crumb3).toHaveAttribute('href', `/${options[2].to}`);

    expect(crumb0.tagName).toBe('A');
    expect(crumb1.tagName).toBe('A');
    expect(crumb2.tagName).toBe('A');
    expect(crumb3.tagName).toBe('A');
  });
});
