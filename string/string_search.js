function naiveSearch(long, short) {
  let cont = 0;

  for (let i = 0; i < long.length; i++) {
    if (long[i] === short[0]) {
      let tempIndexI = i + 1;
      let flag = true;
      for (let j = 1; j < short.length; j++) {
        if (long[tempIndexI] !== short[j]) {
          flag = false;
          break;
        }
        tempIndexI++;
      }
      if (flag) cont++;
    }
  }

  return cont;
}

console.log(naiveSearch("lorie loledlol", "lo"));

const log = (str, s) => (str.match(new RegExp(s, "g")) || []).length;
console.log(log("lorie loledlol", "lo"));
