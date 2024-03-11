function decimalToBinary(decimal, result) {
  if (decimal == 0) return result;
  result = (decimal % 2) + result;
  return decimalToBinary(Math.floor(decimal / 2), result);
}

console.log(decimalToBinary(4, ""));
