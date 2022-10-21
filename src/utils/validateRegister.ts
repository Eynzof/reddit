import { UsernamepasswordingInput } from 'resolvers/UsernamepasswordingInput';

export const validateRegister = (options: UsernamepasswordingInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid email address.',
      },
    ];
  }
  if (options.username.length <= 3) {
    return [
      { field: 'username', message: 'Username must be more than 3 characters' },
    ];
  }
  if (options.username.includes('@')) {
    return [
      { field: 'username', message: 'Username must be more than 3 characters' },
    ];
  }
  if (options.password.length <= 3) {
    return [
      { field: 'password', message: 'Password must be more than 3 characters' },
    ];
  }

  return null;
};
