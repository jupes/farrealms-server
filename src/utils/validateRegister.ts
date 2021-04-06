import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput';

/**
 * This function runs all the validation on what has been passed into the register function
 * @param options Object containing all the data passed by the user from their input
 * @returns An error array, it is put to register what it does with the error
 */

// TODO: have separate utils devoted to separate fields, then larger utils like this one dedicated to specific mutations
export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length < 3) {
    return [
      {
        field: 'username',
        message: 'Username must be longer than 2 characters',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Username cannot inclue @ symbol',
      },
    ];
  }

  // TODO: create regex to verify the email follows correct pattern
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Email must include an @ symbol',
      },
    ];
  }

  if (options.password.length < 3) {
    return [
      {
        field: 'password',
        message: 'Password must be of length 3 or greater',
      },
    ];
  }

  return null;
};
