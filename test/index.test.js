import { expect } from 'chai';
import Either from '../src/index';

describe('<EitherComponent />', () => {
  it('returns either value', () => {
    const expected = 'truthy';
    const props = {
      of: true,
      map: [() => false, value => !value],
      either: 'truthy',
      orElse: 'falsy',
    };
    expect(Either(props)).to.deep.equal(expected);
  });
  it('returns orElse value', () => {
    const expected = 'falsy';
    const props = {
      of: true,
      map: [() => false, value => value],
      either: 'truthy',
      orElse: 'falsy',
    };
    expect(Either(props)).to.deep.equal(expected);
  });
});
