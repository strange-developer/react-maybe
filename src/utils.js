const isArray = arrayToCheck => Array.isArray(arrayToCheck);

const isFunction = functionToCheck => (functionToCheck &&
  {}.toString.call(functionToCheck) === '[object Function]') || false;

module.exports = { isArray, isFunction };
