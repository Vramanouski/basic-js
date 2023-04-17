const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value===undefined) value = '';
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number') || (position < 1) || (position >= this.arr.length) ||  (position !== Math.round(position))) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    } 
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let fin = this.arr.map(x=>`( ${x} )`).join(`~~`);
    this.arr = [];
    return fin;
  }

};

module.exports = {
  chainMaker
};
