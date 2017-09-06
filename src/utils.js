const isFunction = functionToCheck => {
  const getType = {};
  return (
    (functionToCheck &&
      getType.toString.call(functionToCheck) === '[object Function]') ||
    false
  );
};

const compose = (...fns) =>
  fns.reduce(
    (prevFn, nextFn) => value => nextFn(prevFn(value)),
    value => value
  );

module.exports = { isFunction, compose };
