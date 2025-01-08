import { cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Profile from '../Profile';
import { User } from '@/redux/slices/userSlice';
import { renderWithProviders } from '@/test/test-utils';

describe('Profile Component', () => {
  const mockUser: User = {
    email: 'test@gmail.com',
    firstName: 'Test name',
    id: '1',
    lastName: 'test name',
    role: 'ROLE_PERSONAL',
  };

  afterEach(() => {
    cleanup();
  });

  it('renders profile elements correctly', async () => {
    const { getByRole, getByText } = renderWithProviders(<Profile />, {
      preloadedState: {
        user: {
          user: mockUser,
          token: '',
        },
        profile: { isOpen: true },
      },
    });

    expect(getByRole('button', { name: 'close profile' })).toBeInTheDocument();
    expect(getByText('User profile')).toBeInTheDocument();
    expect(
      getByText(`${mockUser.firstName} ${mockUser.lastName}`)
    ).toBeInTheDocument();
    expect(getByText(mockUser.email)).toBeInTheDocument();
    expect(getByRole('link', { name: 'My orders' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Settings' })).toBeInTheDocument();
    expect(getByText('Support')).toBeInTheDocument();
    expect(getByText('Log out')).toBeInTheDocument();
  });

  it('closes the profile when the close button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText, store } = renderWithProviders(
      <Profile />,
      {
        preloadedState: {
          user: {
            user: mockUser,
            token: '',
          },
          profile: { isOpen: true },
        },
      }
    );

    const closeBtn = getByRole('button', { name: 'close profile' });

    expect(closeBtn).toBeInTheDocument();
    expect(getByText('User profile')).toBeInTheDocument();
    expect(store.getState().profile.isOpen).toBe(true);

    await user.click(closeBtn);

    expect(store.getState().profile.isOpen).toBe(false);
    await waitFor(() => {
      expect(queryByText('User profile')).not.toBeInTheDocument();
    });
  });

  it('logs out the user when the logout button is clicked', async () => {
    const user = userEvent.setup();
    const { getByText, queryByText, store } = renderWithProviders(<Profile />, {
      preloadedState: {
        user: {
          user: mockUser,
          token: '',
        },
        profile: { isOpen: true },
      },
    });

    const logoutBtn = getByText('Log out');

    expect(logoutBtn).toBeInTheDocument();
    expect(getByText('User profile')).toBeInTheDocument();
    expect(store.getState().profile.isOpen).toBe(true);
    expect(store.getState().user.user).not.toBe(null);

    await user.click(logoutBtn);

    expect(store.getState().profile.isOpen).toBe(false);
    expect(store.getState().user.user).toBe(null);
    await waitFor(() => {
      expect(queryByText('User profile')).not.toBeInTheDocument();
    });
  });

  it('opens the feedback modal when the support button is clicked', async () => {
    const user = userEvent.setup();
    const { getByText, queryByText, store } = renderWithProviders(<Profile />, {
      preloadedState: {
        user: {
          user: mockUser,
          token: '',
        },
        profile: { isOpen: true },
      },
    });

    const supportBtn = getByText('Support');

    expect(supportBtn).toBeInTheDocument();
    expect(getByText('User profile')).toBeInTheDocument();
    expect(store.getState().profile.isOpen).toBe(true);
    expect(store.getState().modal.openedModalType).toBe(null);

    await user.click(supportBtn);

    expect(store.getState().profile.isOpen).toBe(false);
    expect(store.getState().modal.openedModalType).toBe('feedback');
    await waitFor(() => {
      expect(queryByText('User profile')).not.toBeInTheDocument();
    });
  });
});
