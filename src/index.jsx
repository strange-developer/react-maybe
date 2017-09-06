import React from 'react';
import Either from './either';

const Component = ({ of, map, either, orElse }) =>
  Either.of(of)
    .cata(either, orElse)
    .mapAll(map)
    .resolve();

export default Component;
