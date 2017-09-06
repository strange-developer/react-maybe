import React from 'react';
import Maybe from './maybe';

const Component = ({ of, map, either, orElse }) =>
  Maybe.of(of)
    .mapAll(map)
    .fold(orElse, either);

export default Component;
