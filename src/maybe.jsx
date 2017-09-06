import React from 'react';
import Either from './either';

const Component = ({ of, map, either, orElse }) => {
  const element = Either.of(of)
    .mapAll(map)
    .resolve(orElse, either);

  return element;
};

export default Component;
