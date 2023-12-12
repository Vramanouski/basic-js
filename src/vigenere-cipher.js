const { NotImplementedError } = require("../extensions/index.js");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.radix = this.alphabet.length;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      if (this.alphabet.includes(messageChar)) {
        const messageIndex = this.alphabet.indexOf(messageChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);

        if (this.isDirect) {
          const encryptedIndex =
            (messageIndex + keyIndexInAlphabet) % this.radix;
          result += this.alphabet[encryptedIndex];
        } else {
          const decryptedIndex =
            (messageIndex - keyIndexInAlphabet + this.radix) % this.radix;
          result += this.alphabet[decryptedIndex];
        }

        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      if (this.alphabet.includes(encryptedChar)) {
        const encryptedIndex = this.alphabet.indexOf(encryptedChar);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);

        if (this.isDirect) {
          const decryptedIndex =
            (encryptedIndex - keyIndexInAlphabet + this.radix) % this.radix;
          result += this.alphabet[decryptedIndex];
        } else {
          const encryptedIndexInAlphabet =
            (encryptedIndex + keyIndexInAlphabet) % this.radix;
          result += this.alphabet[encryptedIndexInAlphabet];
        }

        keyIndex++;
      } else {
        result += encryptedChar;
      }
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
