const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date[Symbol.toStringTag]==="Date") throw new Error('Invalid date!');
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (date.getMonth()>=2 && date.getMonth()<=4) return seasons[1];
  if (date.getMonth()>=5 && date.getMonth()<=7) return seasons[2];
  if (date.getMonth()>=8 && date.getMonth()<=10) return seasons[3];
  return seasons[0]
}

module.exports = {
  getSeason
};
