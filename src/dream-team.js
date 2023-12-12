const { NotImplementedError } = require("../extensions/index.js");

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
  let name = [];

  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach((member) => {
    if (typeof member === "string") {
      const trimmedMember = member.trim();
      if (trimmedMember.length > 0) {
        name.push(trimmedMember[0].toUpperCase());
      }
    }
  });

  name.sort();

  if (name.length > 0) {
    return name.join("");
  } else return false;
}
module.exports = {
  createDreamTeam,
};
