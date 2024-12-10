import slice from '../src/slice';

describe('slice', () => {
  const array = [1, 2, 3, 4];

  test('slices array from a start index', () => {
    expect(slice(array, 2)).toEqual([3, 4]);
  });

  test('slices array with start and end indices', () => {
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  test('handles negative indices', () => {
    expect(slice(array, -3, -1)).toEqual([2, 3]);
  });

  test('returns empty array for null input', () => {
    expect(slice(null)).toEqual([]);
  });
});
