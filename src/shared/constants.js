/**
 * File to save all constants in app
 */

export const LOGIN_MOCKUP_DATA = [
  {
    username: 'admin@innova.in',
    password: 'Admin@123',
    profileName: 'Uday Dontula',
    role: 'ADMIN'
  },
  {
    username: 'hr@innova.in',
    password: 'Hr@123456',
    profileName: 'Tharun Ganga',
    role: 'HR'
  }
];

export const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;

// eslint-disable-next-line max-len
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

