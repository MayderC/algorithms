function isPrime(num) {
  for (let i = 2; i * i < num; i++) {
    console.log(i);
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(5)); // false

function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
