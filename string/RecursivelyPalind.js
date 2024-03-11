function isPalidromo(s) {
  if (s.length == 0 || s.length == 1) return true;
  if (s[0] == s[s.length - 1]) return isPalidromo(s.slice(1, s.length - 1));
  return false;
}

console.log(isPalidromo("ab1111ba"));
