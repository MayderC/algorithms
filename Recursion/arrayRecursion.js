function recursionArr(array) {
  if (array.length == 1) return [...array];
  const deleted = array.splice(0, 1);
  return recursionArr(array).concat(deleted);
}

console.log(recursionArr([1, 2, 3, 4, 5, 6]));
