import Either from '../src/index';

describe('<EitherComponent />', () => {
  test('returns either value', () => {
    const expected = 'truthy';
    const props = {
      of: true,
      map: [() => false, value => !value],
      either: 'truthy',
      orElse: 'falsy',
    };
    expect(Either(props)).toEqual(expected);
  });
  test('returns orElse value', () => {
    const expected = 'falsy';
    const props = {
      of: true,
      map: [() => false, value => value],
      either: 'truthy',
      orElse: 'falsy',
    };
    expect(Either(props)).toEqual(expected);
  });
});
