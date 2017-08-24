import React from 'react';
import Maybe from './maybe';

const Component = ({ of, map, either, orElse }) =>
  Maybe.of(of).cata(either, orElse).mapAll(map).resolve();

export default Component;
