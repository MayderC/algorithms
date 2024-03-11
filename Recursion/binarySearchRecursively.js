function binarySearch(arr, left, right, num) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] == num) return mid;
  if (num < arr[mid]) return binarySearch(arr, left, mid - 1, num);
  if (num > arr[mid]) return binarySearch(arr, mid + 1, right, num);
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const num = 1;

//console.log(arr[binarySearch(arr, 0, arr.length - 1, num)] == num);

function binarySearchNonRecursive(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == num) return mid;
    if (num < arr[mid]) right = mid - 1;
    if (num > arr[mid]) left = mid + 1;
  }
}
