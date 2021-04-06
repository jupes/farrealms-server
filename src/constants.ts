// the NODE_ENV is a special variable that is set to the string production in a production environment
export const __prod__ = process.env.NODE_ENV === 'production';
export const COOKIE_NAME = 'realmsid';

/* Regex for ensuring password meets the following requirements: 
    8 to 30 characters length
    2 letters in Upper Case
    1 Special Character (!@#$&*)
    2 numerals (0-9)
    3 letters in Lower Case
    --
    ^                         Start anchor
    (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
    (?=.*[!@#$&*])            Ensure string has one special case letter.
    (?=.*[0-9].*[0-9])        Ensure string has two digits.
    (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
    .{8, 30}                  Ensure string is of length 8 to 30.
    $                         End anchor.
*/
export const __passwordRegex__ = new RegExp(
  '^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8, 30}$'
);
