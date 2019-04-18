// Recursion Examples

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

function power(base, exponent) {
  // When Exponent becomes 0 then it'll return 1 so that when base multiplied to returned value it won't be affect the final output.
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 10));