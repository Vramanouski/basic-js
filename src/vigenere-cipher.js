const { NotImplementedError } = require("../extensions/index.js");
class VigenereCipheringMachine {
  constructor(isDirectMachine = true) {
    this.isDirectMachine = isDirectMachine;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabetLength = this.alphabet.length;
  }

  encrypt(inputMessage, inputKey, isDecrypt = false) {
    if (!inputMessage) {
      throw new Error("Incorrect arguments!");
    }
    if (!inputKey) {
      throw new Error("Incorrect arguments!");
    }

    const characterShift = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };

    let result = "";
    let keyIndex = 0;
    let extendedKey = inputKey.toUpperCase();

    while (extendedKey.length < inputMessage.length) {
      extendedKey += extendedKey;
    }
    extendedKey = extendedKey.slice(0, inputMessage.length);

    const messageArray = [...inputMessage.toUpperCase()];

    messageArray.forEach((char) => {
      if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        let movedChar;
        if (!isDecrypt) {
          movedChar = char.charCodeAt() + characterShift[extendedKey[keyIndex]];
          if (movedChar > 90) {
            movedChar = movedChar - 90 + 64;
          }
        } else {
          movedChar = char.charCodeAt() - characterShift[extendedKey[keyIndex]];
          if (movedChar < 65) {
            movedChar = 90 - 64 + movedChar;
          }
        }
        result += String.fromCharCode(movedChar);
        keyIndex++;
      } else {
        result += char;
      }
    });

    if (this.isDirectMachine) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  decrypt(encryptedMessage, inputKey) {
    return this.encrypt(encryptedMessage, inputKey, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};

module.exports = {
  VigenereCipheringMachine,
};
