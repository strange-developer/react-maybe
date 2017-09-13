import { isArray, isFunction } from './utils';

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
    const newValue = this.isNothing() ? null : fn(this.value);
    return Maybe.of(newValue);
  }

  mapAll(fnList) {
    if (isArray(fnList)) {
      return fnList.reduce(
        (prevValue, currVal) => (isFunction(currVal) ? prevValue.map(currVal) : prevValue),
        this,
      );
    } else if (isFunction(fnList)) {
      return this.map(fnList);
    }
    return this;
  }

  fold(falsyComponent, truthyComponent) {
    return this.isNothing() || this.value === false ? falsyComponent : truthyComponent;
  }
}

export default Maybe;
