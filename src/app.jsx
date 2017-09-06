import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './HelloComponent';
import Either from './maybe';

ReactDOM.render(
  <Either
    of={true}
    map={[() => false, () => true]}
    either={<Hello />}
    orElse={<p>blah</p>}
  />,
  document.getElementById('root')
);
