export const ciclicRotation = (arr = [], n) => {
  console.log(arr);

  for (let i = 0; i < n; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }

  console.log(arr);
};

ciclicRotation([1, 2, 3, 4, 5, 6], 2);

const rotation = (arr, n) => {
  console.log(arr);

  const myArr = [];

  for (let i = 0; i < arr.length; i++) {
    myArr[(i + n) % arr.length] = arr[i];

    console.log(i);
  }

  console.log(myArr);
};

rotation([1, 2, 3, 4, 5, 6], 2);
