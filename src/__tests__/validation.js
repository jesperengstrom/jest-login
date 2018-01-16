import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
  expect(validateEmail('jesper@jesper.se')).toBeTruthy();
});

it('fails on invalid email', () => {
  expect(validateEmail('blaj')).toBeFalsy();
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
  expect(validatePassword('asdfghJ2')).toBeTruthy();
});

it('invalid password: missing digit', () => {
 expect(validatePassword('asdfghJx')).toBeFalsy();
});

it('invalid password: missing 1 uppercase', () => {
  expect(validatePassword('asdfghj2')).toBeFalsy();

});
