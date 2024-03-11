function sum(num) {
  if (num % 10 == num) return num;
  const r = num % 10;
  return sum((num - r) / 10 + r);
}

console.log(sum(1332));
