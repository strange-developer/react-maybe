import { expect } from 'chai';
import { isFunction } from '../src/utils';

describe('utils', () => {
  describe('isFunction', () => {
    it('returns true when function', () => {
      expect(isFunction(() => {})).to.be.true;
    });
    it('returns false when undefined', () => {
      expect(isFunction(undefined)).to.be.false;
    });
    it('returns false when null', () => {
      expect(isFunction(null)).to.be.false;
    });
    it('returns false when string', () => {
      expect(isFunction('test-string')).to.be.false;
    });
  });
});
