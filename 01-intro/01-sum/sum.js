function sum(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new TypeError();
  }
}

function isNumber(n) {
  return typeof n === 'number';
}

module.exports = sum;
