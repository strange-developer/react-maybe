import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import EitherComponent from '../src/index';

chai.use(chaiEnzyme());

describe('<EitherComponent />', () => {
  it('returns either component prop', () => {
    const expected = <p>either</p>;
    const props = {
      of: true,
      map: [() => false, value => !value],
      either: <p>either</p>,
      orElse: <p>orElse</p>,
    };
    const actual = shallow(<EitherComponent {...props} />);
    expect(actual).to.deep.equal(expected);
  });
});
