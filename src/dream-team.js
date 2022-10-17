const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let count = 0;
  if(members === null || typeof members === "undefined" || typeof members === "number"){
    return false;
  }
  for (let i = 0; i<members.length; i++){
    if(typeof members[i] === "string"){
      members[i] = members[i].toUpperCase().trim();
      arr[count] = members[i][0];
      count +=1
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
