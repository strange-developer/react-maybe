# react-maybe

Render one of two React components

[![Build Status](https://travis-ci.org/strange-developer/react-maybe.svg?branch=master)](https://travis-ci.org/strange-developer/react-maybe)

react-maybe is built behind a monad which conditionally displays one of two components based on the
value contained in the `of` prop. If the value is one of `null`, `undefined` or `false`, the
`orElse` component will be displayed. In all other cases the component passed to the `either` prop
will be displayed.

Additionally, the value in the `of` prop can be altered through the use of the `map` prop. The `map`
prop could be a function or an array of functions.

### Installation

Installation is currently available via **npm**:

```sh
$ npm i -S react-maybe
```

### Usage

##### Basic

A basic **react-maybe** implementation will display one of two components based on the value of the
`of` prop:

```js
import Maybe from 'react-maybe';

const Component = ({ showChevronUp }) => (
  <div>
    <Maybe of={showChevronUp} either={<ChevronUp />} orElse={<ChevronDown />} />
  </div>
);
```

##### Advanced

A more advanced **react-maybe** implementation can alter the value of the `of` prop through use of
the `map` prop:

```js
import Maybe from 'react-maybe';

const sampleUser = { name: 'Maybe', isActive: false };
const isActive = user => user.isActive;

const Component = () => (
  <div>
    <Maybe of={sampleUser} map={isActive} either={<ActiveUser />} orElse={<InactiveUser />} />
  </div>
);
```

_The above will render the `orElse` as our sample user is inactive_

or

```js
import Maybe from 'react-maybe';

const sampleUser = { name: 'Maybe', isActive: true };
const isActive = user => (user.isActive ? user : false);
const hasPhoneNumber = user => !!user.phone;

const Component = () => (
  <div>
    <Maybe
      of={sampleUser}
      map={[isActive, hasPhoneNumber]}
      either={<ActiveUserWithPhone />}
      orElse={<UserWithoutPhone />}
    />
  </div>
);
```

_The above example will render the `orElse` component as our user is active, but has no phone
number_

### Properties

* **of**

    The value that the monad will contain.

* **map**

    Accepts a function or an array of functions which has the ability to transform the value contained
    in the `of` prop.

* **either**

    Accepts a component that will be rendered in all cases where the value of the `of` prop is not
    equal to `undefined`, `null`, or `false`.

* **orElse**

    Accepts a component that will be rendered when the value of the `of` prop is equal to
    `undefined`, `null`, or `false`.

### Running tests

You can either run the tests with npm or docker.

##### NPM

```sh
$ npm i
$ npm test
```

##### Docker

```sh
$ docker-compose run --rm app npm i
$ docker-compose up
```
