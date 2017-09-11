# react-maybe
[![Build Status](https://travis-ci.org/strange-developer/react-maybe.svg?branch=master)](https://travis-ci.org/strange-developer/react-maybe)
Render one of two React components



react-maybe is build behind a monad which conditionally displays one of two components based on the value contained in the `of` prop. If the value is one of `null`, `undefined` or `false`, the `orElse` component will be displayed. In all other cases the component passed to the `either` prop will be displayed.

```
import Maybe from 'react-maybe';

const Component = ({ showChevronUp }) => (
  <div>
    <Maybe of={showChevronUp} map={someFn} either={<ChevronUp />} orElse={<ChevronDown />} />
  </div>
);
```

react-maybe accepts four props:

### of
The value that the monad will contain.

### map
Accepts a function or an array of functions which has the ability to transform the value contained in the `of` prop.

### either
Accepts a component that will be rendered in all cases where the value of the `of` prop is not equal to `undefined`, `null`, or `false`.

### orElse
Accepts a component that will be rendered when the value of the `of` prop is equal to `undefined`, `null`, or `false`.
