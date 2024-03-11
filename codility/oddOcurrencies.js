/*
  A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

  For example, in array A such that:

    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
  the elements at indexes 0 and 2 have value 9,
  the elements at indexes 1 and 3 have value 3,
  the elements at indexes 4 and 6 have value 9,
  the element at index 5 has value 7 and is unpaired.
*/

function oddOcurrences(arr) {
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) set.delete(item);
    else set.add(item);
  }

  return [...set][0];
}

console.log(oddOcurrences([1, 4, 6, 8, 4, 6, 1]) == 8);
