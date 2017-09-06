import React from 'react';
import Either from './either';

const Component = ({ of, map, either, orElse }) => {
  const element = Either.of(of)
    .mapAll(map)
    .cata(orElse, either)
    .resolve();

  return element;
};

export default Component;
