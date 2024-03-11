export function mergeSort(arr, start, end) {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  return merge(arr, start, mid, end);
}

export function merge(arr, start, mid, end) {
  const temp = [];
  let i = start;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) {
    temp.push(arr[i++]);
  }
  while (j <= end) {
    temp.push(arr[j++]);
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i - start];
  }

  return arr;
}

const arr = [0, 100, 40, 20, 235, 300, 69, 60, -1];
const result = mergeSort(arr, 0, arr.length - 1);

console.log(result);
