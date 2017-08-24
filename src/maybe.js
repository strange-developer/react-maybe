import { isFunction } from './utils';

function Either(value) {
  this.__value = value;
}

Either.of = function(value) {
  return new Either(value);
};

Either.prototype.isNothing = function() {
  return this.__value === null || this.__value === undefined;
};

Either.prototype.map = function(fn) {
  if (this.isNothing()) {
    return Either.of(null);
  }
  return Either.of(this.map(fn));
};

Either.prototype.cata = (left, right) => {
  this.either = left;
  this.orElse = right;
  return this;
};

Either.prototype.mapAll = fnList => {
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
};

Either.prototype.resolve = () => {
  if (this.isNothing() || this.__value === false) {
    return this.right;
  } else {
    return this.left;
  }
};

export default Either;
