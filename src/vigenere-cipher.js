let abc = 'abcdefghijklmnopqrstuvwxyz';

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message,key) {
    if (!message || !key) throw Error('no args');

    message = vigenereCipher(message, key, 1);
    return this.type ? message : message.split('').reverse().join('');
  }

  decrypt(message,key) {
    if (!message || !key) throw Error('no args');

    message = vigenereCipher(message, key, -1);
    return this.type ? message : message.split('').reverse().join('');
  }
}

const transform = value => value.toLowerCase().split('').map(item => 
  /^[a-z]/.test(item) ? abc.indexOf(item, 0) : item);

const codingDecoding = message => message.map(item => 
  typeof item === 'number' && /^[0-9]/.test(item) ? abc[item] : item)
  .join('').toUpperCase();

const vigenereCipher = (message, key, n) => {
  message = transform(message);
  key = transform(key);

  for (let i = 0, j = 0; i < message.length; i++) {
    if (/^[0-9]/.test(message[i]) && typeof message[i] !== 'string') {
      message[i] += key[j] * n;
      j + 1 === key.length ? j = 0 : j++;
      if (message[i] < 0 || message[i] > 25) message[i] -= 26 * n;
    }
  }
  return codingDecoding(message);
};

module.exports = VigenereCipheringMachine;
