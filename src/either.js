import { isFunction } from './utils';

class Either {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Either(value);
  }

  isNothing() {
    return this.value === null || this.value === undefined;
  }

  map(fn) {
    if (this.isNothing()) {
      return Either.of(null);
    }
    return Either.of(fn(this.value));
  }

  cata(left, right) {
    this.either = left;
    this.orElse = right;
    return this;
  }

  mapAll(fnList) {
    const eitherContext = this;
    if (fnList.constructor === Array) {
      return fnList.reduce(
        (prevValue, currVal) => prevValue.map(currVal),
        eitherContext
      );
    } else if (isFunction(fnList)) {
      return eitherContext.map(fnList);
    } else {
      return eitherContext;
    }
  }

  resolve() {
    if (this.isNothing() || this.value === false) {
      return this.either;
    } else {
      return this.orElse;
    }
  }
}

export default Either;
