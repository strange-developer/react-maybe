import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Maybe from '../src/maybe';

chai.use(sinonChai);

describe('Either', () => {
  it('creates wrapped instance', () => {
    const expected = Object.create(Maybe.prototype, {
      value: { value: 'test', enumerable: true },
    });
    expect(new Maybe('test')).to.deep.eq(expected);
  });
  it('of', () => {
    const expected = new Maybe('test');
    expect(Maybe.of('test')).to.deep.eq(expected);
  });
  describe('isNothing', () => {
    it('returns true for null', () => {
      expect(Maybe.of(null).isNothing()).to.be.true;
    });
    it('returns true for undefined', () => {
      expect(Maybe.of(undefined).isNothing()).to.be.true;
    });
    it('returns false for some value', () => {
      expect(Maybe.of('').isNothing()).to.be.false;
      expect(Maybe.of('something').isNothing()).to.be.false;
      expect(Maybe.of(54).isNothing()).to.be.false;
      expect(Maybe.of({ value: 'something' }).isNothing()).to.be.false;
    });
  });
  describe('map', () => {
    it('returns Maybe(null) if wrapped value is null', () => {
      const testFn = () => {};
      expect(Maybe.of(undefined).map(testFn)).to.deep.eq(Maybe.of(null));
    });
    it('executes function if wrapped value is not null', () => {
      const spy = sinon.spy();
      Maybe.of({ definitely: 'monads rock!' }).map(spy);
      expect(spy).to.have.been.calledOnce;
    });
    it('does not execute function if wrapped value is null', () => {
      const spy = sinon.spy();
      Maybe.of(null).map(spy);
      expect(spy).to.not.have.been.called;
    });
    it('returns a Maybe', () => {
      const testFn = val => val;
      const actual = Maybe.of({ definitely: 'monads rock!' }).map(testFn);
      expect(actual instanceof Maybe).to.be.true;
    });
  });
  describe('mapAll', () => {
    it('executes an array of functions', () => {
      const testFns = [
        val => Object.assign({}, val, { monadType: 'maybe' }),
        val => val,
      ];
      const actual = Maybe.of({ username: 'strange-developer' }).mapAll(testFns);
      const expected = Maybe.of({ username: 'strange-developer', monadType: 'maybe' });
      expect(actual).to.deep.eq(expected);
    });
    it('executes a single function', () => {
      const testFn = sinon.spy();
      const value = { definitely: 'monads rock!' };
      Maybe.of(value).mapAll(testFn);
      expect(testFn).to.have.been.calledOnce;
      expect(testFn).to.be.calledWith(value);
    });
    it('executes returns back context if no function is supplied', () => {
      expect(Maybe.of('monads rock!').mapAll(['', null, undefined, false, 100])).to.deep.eq(
        Maybe.of('monads rock!'),
      );
      expect(Maybe.of('monads rock!').mapAll(100)).to.deep.eq(
        Maybe.of('monads rock!'),
      );
    });
    it('executes executes a single function', () => {
      const testFn = sinon.spy();
      Maybe.of('monads rock!').mapAll(testFn);
      expect(testFn).to.have.been.calledOnce;
    });
  });
  describe('fold', () => {
    it('returns falsy component', () => {
      const expected = 'falsy value';
      const actual = Maybe.of(null).fold('falsy value', 'truthy value');
      expect(actual).to.deep.eq(expected);
    });
    it('returns truthy component', () => {
      const expected = 'truthy value';
      const actual = Maybe.of({}).fold('falsy value', 'truthy value');
      expect(actual).to.deep.eq(expected);
    });
  });
});
