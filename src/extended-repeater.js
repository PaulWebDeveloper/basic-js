module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 0;
  let separator = options.separator || '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator || '|';
  let addString = '';

  if (addition !== undefined) 
    addString = repeat(addition, additionRepeatTimes, additionSeparator);

  str = repeat(str + addString,repeatTimes,separator);

  return str;
  throw 'Not implemented';
};
  
const repeat = (str, repeatTimes, separator) => {
  let s = ''
  if (repeatTimes) repeatTimes--;
  while(repeatTimes--) s += separator + str;
  return str + s;
};
