import get from '../src/get';

describe('get', () => {
  const object = { a: [{ b: { c: 3 } }] };

  test('retrieves value using a string path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('retrieves value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value for undefined path', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });
});
