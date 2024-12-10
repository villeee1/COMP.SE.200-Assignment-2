import capitalize from '../src/capitalize';

describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  test('handles uppercase input', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
