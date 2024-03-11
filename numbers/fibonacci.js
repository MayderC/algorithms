function fibo(numth, n2 = 1, n1 = 1, cont = 0) {
  if (cont >= numth) return;

  console.log(n2);
  return fibo(numth, n1, n1 + n2, cont + 1);
}

fibo(10);
