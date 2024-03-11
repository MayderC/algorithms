// Returns floor of square root of x
function floorSqrt(x) {
  // Base cases
  if (x == 0 || x == 1) return x;

  let i = 1;
  let result = 1;

  while (result <= x) {
    console.log(i, result);
    i++;
    result = i * i;
  }
  return i - 1;
}

console.log(floorSqrt(16));
