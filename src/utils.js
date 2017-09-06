const isFunction = functionToCheck => {
  var getType = {};
  return (
    (functionToCheck &&
      getType.toString.call(functionToCheck) === '[object Function]') ||
    false
  );
};

module.exports = { isFunction };
