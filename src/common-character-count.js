const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = s1.split('');
  let str2 = s2.split('');
  let arr = [];
  count = 0;
  for (let i = 0; i<str1.length; i++){
    for (let j = 0; j<str2.length; j++){
      if (str1[i] === str2[j]){
        arr[count] = str1[i];
        count +=1;
        str2.splice(j, 1);
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
