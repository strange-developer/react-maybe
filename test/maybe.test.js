import Maybe from '../src/maybe';

describe('Either', () => {
  test('creates wrapped instance', () => {
    const expected = Object.create(Maybe.prototype, {
      value: { value: 'test', enumerable: true },
    });
    expect(new Maybe('test')).toEqual(expected);
  });
  test('of', () => {
    const expected = new Maybe('test');
    expect(Maybe.of('test')).toEqual(expected);
  });
  describe('isNothing', () => {
    test('returns true for null', () => {
      expect(Maybe.of(null).isNothing()).toBeTruthy();
    });
    test('returns true for undefined', () => {
      expect(Maybe.of(undefined).isNothing()).toBeTruthy();
    });
    test('returns false for some value', () => {
      expect(Maybe.of('').isNothing()).toBeFalsy();
      expect(Maybe.of('something').isNothing()).toBeFalsy();
      expect(Maybe.of(54).isNothing()).toBeFalsy();
      expect(Maybe.of({ value: 'something' }).isNothing()).toBeFalsy();
    });
  });
  describe('map', () => {
    test('returns Maybe(null) if wrapped value is null', () => {
      const testFn = () => {};
      expect(Maybe.of(undefined).map(testFn)).toEqual(Maybe.of(null));
    });
    test('executes function if wrapped value is not null', () => {
      const spy = jest.fn();
      Maybe.of({ definitely: 'monads rock!' }).map(spy);
      expect(spy).toHaveBeenCalledTimes(1);
    });
    test('does not execute function if wrapped value is null', () => {
      const spy = jest.fn();
      Maybe.of(null).map(spy);
      expect(spy).toHaveBeenCalledTimes(0);
    });
    test('returns a Maybe', () => {
      const testFn = val => val;
      const actual = Maybe.of({ definitely: 'monads rock!' }).map(testFn);
      expect(actual instanceof Maybe).toBeTruthy();
    });
  });
  describe('mapAll', () => {
    test('executes an array of functions', () => {
      const testFns = [
        val => Object.assign({}, val, { monadType: 'maybe' }),
        val => val,
      ];
      const actual = Maybe.of({ username: 'strange-developer' }).mapAll(testFns);
      const expected = Maybe.of({ username: 'strange-developer', monadType: 'maybe' });
      expect(actual).toEqual(expected);
    });
    test('executes a single function', () => {
      const testFn = jest.fn();
      const value = { definitely: 'monads rock!' };
      Maybe.of(value).mapAll(testFn);
      expect(testFn).toHaveBeenCalledTimes(1);
      expect(testFn).toHaveBeenCalledWith(value);
    });
    test('executes returns back context if no function is supplied', () => {
      expect(Maybe.of('monads rock!').mapAll(['', null, undefined, false, 100])).toEqual(
        Maybe.of('monads rock!'),
      );
      expect(Maybe.of('monads rock!').mapAll(100)).toEqual(
        Maybe.of('monads rock!'),
      );
    });
    test('executes executes a single function', () => {
      const testFn = jest.fn();
      Maybe.of('monads rock!').mapAll(testFn);
      expect(testFn).toHaveBeenCalledTimes(1);
    });
  });
  describe('fold', () => {
    test('returns falsy component', () => {
      const expected = 'falsy value';
      const actual = Maybe.of(null).fold('falsy value', 'truthy value');
      expect(actual).toEqual(expected);
    });
    test('returns truthy component', () => {
      const expected = 'truthy value';
      const actual = Maybe.of({}).fold('falsy value', 'truthy value');
      expect(actual).toEqual(expected);
    });
  });
});
