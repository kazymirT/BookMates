type Props = {
  email: string;
  password: string;
};
export const loginApi = async (body: Props) => {
  const response = await fetch(
    'https://teamchallenge.onrender.com/api/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    }
  );

  return response;
};

type RegisterProps = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const registerApi = async (body: RegisterProps) => {
  const response = await fetch(
    'https://teamchallenge.onrender.com/api/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
      }),
    }
  );
  return response;
};
