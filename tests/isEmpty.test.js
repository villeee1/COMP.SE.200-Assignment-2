import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  test('checks if value is null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('checks if arrays or strings are empty', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  test('checks if objects are empty', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('checks if maps and sets are empty', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });
});
