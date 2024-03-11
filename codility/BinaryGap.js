import { IntToBinaryNumber } from "./IntToBinaryNumber.js";

const binaryGap = (N) => {
  const binary = IntToBinaryNumber(N);

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < binary.length - 1; i++) {
    if (binary[i] == 1 && binary[i + 1] == 0) {
      let j = i + 1;
      while (binary[j] == 0) j++;
      if (binary[j] == 1) max = Math.max(j - 1 - i, max);
      else max = Math.max(max, 0);
    }
  }
  return max;
};

function binaryGapTwo(N) {
  let binary = IntToBinaryNumber(N);
  let max = 0;
  let cont = 0;
  for (let i in binary) {
    if (binary[i] == 1) {
      max = Math.max(max, cont);
      cont = 0;
    } else if (binary[i] == 0) cont++;
  }

  return max;
}

console.log(solution(1041));
