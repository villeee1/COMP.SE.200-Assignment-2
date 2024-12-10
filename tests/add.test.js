import add from '../src/add';

describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('handles adding zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('handles negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });
});
