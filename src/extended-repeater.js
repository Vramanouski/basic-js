const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str+='';

  if (!options.separator) options.separator='+';
  if (!options.additionSeparator) options.additionSeparator='|'

  let addStr='';

   if (options.addition!==undefined) {
    options.addition+='';
    if (!options.additionRepeatTimes) options.additionRepeatTimes= 1;
    let addArr = [];
    for (let i=0; i<options.additionRepeatTimes; i++) {
      addArr.push(options.addition);
    };
    addStr = addArr.join(options.additionSeparator);
  }

  let arr = [];
  if (!options.repeatTimes) options.repeatTimes= 1;
  for (let i=0; i<options.repeatTimes; i++) {
    arr.push(str+addStr);
  }

  return arr.join(options.separator)

  
}

module.exports = {
  repeater
};
