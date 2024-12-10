import clamp from '../src/clamp.js';

describe('clamp', () => {
  test('clamps a number within bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('returns the number if within bounds', () => {
    expect(clamp(3, -5, 5)).toBe(3); 
  });

  test('handles edge cases', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
    expect(clamp(5, -5, 5)).toBe(5);
  });
});
