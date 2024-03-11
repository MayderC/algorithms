function recursivelyPalim(string) {
  if (string.length == 0 || string.length == 1) return true;
  if (string[0] == string[string.length - 1])
    return recursivelyPalim(string.slice(1, string.length - 1));
  return false;
}


