/*Write a JavaScript function to compute the sum of an array of integers. */


function sumOfIntegers(num) {
  if (num.length === 1) {
    return num[0];
  }
  else {
    return num.pop() + sumOfIntegers(num);
  }
};

console.log(sumOfIntegers([6, 4, 3, 7, 8, 2]));