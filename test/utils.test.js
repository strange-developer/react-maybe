import { expect } from 'chai';
import { isArray, isFunction } from '../src/utils';

describe('utils', () => {
  describe('isFunction', () => {
    it('returns true when function', () => {
      expect(isFunction(() => {})).to.be.true;
    });
    it('returns false when no function', () => {
      expect(isFunction()).to.be.false;
      expect(isFunction('test-string')).to.be.false;
      expect(isFunction({})).to.be.false;
      expect(isFunction(null)).to.be.false;
    });
  });
  describe('isArray', () => {
    it('returns true when array', () => {
      expect(isArray([])).to.be.true;
    });
    it('returns false when not array', () => {
      expect(isArray()).to.be.false;
      expect(isArray('test-string')).to.be.false;
      expect(isArray({})).to.be.false;
      expect(isArray(null)).to.be.false;
    });
  });
});
