module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('if arr is not an Array');

  let count = 1;

  arr.filter(item => item === '--discard-next' || item === '--discard-prev' ? count++ : '');

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === '--double-next') i + 1 < len ? arr[i] = arr[i+1] : arr[i] = ' ';
    if (arr[i] === '--double-prev') i ? arr[i] = arr[i-1] : arr[i] = ' ';
  }

  while (count--) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === '--discard-next' || arr[i] === '--discard-prev') {
        if (arr[i] === '--discard-next' && i + 1 < len) arr[i+1] = ' ';
        if (arr[i] === '--discard-prev' && i) arr[i-1] = ' ';
        arr[i] = ' ';
        break;
      }
    }
    arr = arr.filter(item => item !== ' ');
  }

  return arr;
};
