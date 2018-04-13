import { isArray, isFunction } from '../src/utils';

describe('utils', () => {
  describe('isFunction', () => {
    test('returns true when function', () => {
      expect(isFunction(() => {})).toBeTruthy();
    });
    test('returns false when no function', () => {
      expect(isFunction()).toBeFalsy();
      expect(isFunction('test-string')).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction(null)).toBeFalsy();
    });
  });
  describe('isArray', () => {
    test('returns true when array', () => {
      expect(isArray([])).toBeTruthy();
    });
    test('returns false when not array', () => {
      expect(isArray()).toBeFalsy();
      expect(isArray('test-string')).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(null)).toBeFalsy();
    });
  });
});
