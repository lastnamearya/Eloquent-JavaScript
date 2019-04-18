// Write a Program to find the Exponent Power of a Number

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

console.log(power(2, 10));