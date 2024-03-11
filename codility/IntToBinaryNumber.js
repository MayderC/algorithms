export const IntToBinaryNumber = (N) => {
  let binary = "";
  while (N > 0) {
    binary = (N % 2) + binary;
    N = Math.floor(N / 2);
  }

  return binary;
};
