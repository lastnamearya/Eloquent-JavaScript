// Default Argument in Js Function. When user failed to provide the additional required argument.

function power(a, b = 2) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

console.log(power(2));
console.log(power(2, 6));
console.log(power(2, 10));