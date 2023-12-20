/**
 * The function `validateEmail` checks if a given email address is valid according to a regular
 * expression pattern.
 * @returns a boolean value indicating whether the given email is valid or not.
 */
export function validateEmail(email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(String(email).toLowerCase());
  }
  