import toNumber from '../src/toNumber';

describe('toNumber', () => {
  test('converts a string to a number', () => {
    expect(toNumber('3.2')).toBe(3.2);
  });

  test('handles binary strings', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  test('handles octal strings', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  test('returns NaN for invalid inputs', () => {
    expect(toNumber('invalid')).toBeNaN();
  });

  test('handles numbers and symbols correctly', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Symbol('sym'))).toBeNaN();
  });
});
