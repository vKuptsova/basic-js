const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = String(n).split("");
  let length = arr.length;
  let middle = Math.ceil(length/2);
  let arr1 = [];
  let arr2 = [];
  if (length % 2 !== 0){
      for (let i = 0; i<middle; i++){
      arr1[i] = arr[i]; 
  }
      for (let i = 0; i<middle; i++){
      arr2[i] = arr[i+middle-1];
    }
  } else {
      for (let i = 0; i<middle; i++){
      arr1[i] = arr[i]; 
  }
      for (let i = 0; i<middle; i++){
      arr2[i] = arr[i+middle];
    }
  }
  let minNum1 = Math.min.apply(null, arr1);
  let minNum2 = Math.min.apply(null, arr2);
  for (let i = 0; i<arr.length; i++){
    if ((minNum1 === minNum2 || minNum1 < minNum2) || (arr[middle-1] > arr[0])) {
        if (Number(arr[i]) === minNum1){
        arr.splice(i, 1);
        break;
        }
    } else {
        if (Number(arr[i]) === minNum2){
        arr.splice(i, 1);
        break;
        }
    }
  }
  
  return Number(arr.join(""));
}

module.exports = {
  deleteDigit
};
