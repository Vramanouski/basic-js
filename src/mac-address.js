const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(/* n */) {
  n = n.split('-');
  if (n.length !== 6) return false;
  for (let elem of n) {
    if (parseInt(elem,16) < parseInt(0,16) || parseInt(elem,16) > parseInt(255,16) || isNaN(parseInt(elem,16))) return false
  }
  return true;
}
module.exports = {
  isMAC48Address
};
