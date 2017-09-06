const isFunction = functionToCheck => {
  const getType = {};
  return (
    (functionToCheck &&
      getType.toString.call(functionToCheck) === '[object Function]') ||
    false
  );
};

module.exports = { isFunction };
