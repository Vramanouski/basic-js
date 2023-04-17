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
  n = (n+'').split('');
  let max = [];
  n.forEach((x,i)=>{
    let tmp = [...n];
    tmp.splice(i,1);
    max.push(+(tmp.join('')));
  })
  return Math.max(...max);
}
module.exports = {
  deleteDigit
};
