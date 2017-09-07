import { isFunction } from './utils';

class Maybe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    if (this.isNothing()) {
      return Maybe.of(null);
    }
    return Maybe.of(fn(this.value));
  }

  mapAll(fnList) {
    const maybeContext = this;
    if (fnList.constructor === Array) {
      return fnList.reduce((prevValue, currVal) => {
        if (isFunction(currVal)) {
          return prevValue.map(currVal);
        }
        return prevValue;
      }, maybeContext);
    } else if (isFunction(fnList)) {
      return maybeContext.map(fnList);
    }

    return maybeContext;
  }

  fold(falsyComponent, truthyComponent) {
    if (this.isNothing() || this.value === false) {
      return falsyComponent;
    }
    return truthyComponent;
  }
}

export default Maybe;
