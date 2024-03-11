function recursionStr(string) {
  if (string.length == 1) return string;
  return recursionStr(string.slice(1, string.length)) + string[0];
}

function reverseStr(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    str += string[string.length - 1 - i];
  }
  return str;
}

console.log(reverseStr("HOLA"));
