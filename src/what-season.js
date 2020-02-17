module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  
  let timeOfYear = ['winter', 'spring', 'summer', 'autumn'];
  let value = JSON.stringify(date);

  if (value.length !== 26) throw new Error('Invalid argument');

  value = value.split('-')[1];
  value = Math.floor(value / 3);
  if (value === 4) value = 0;
  
  return timeOfYear[value];
  throw 'Not implemented';
};
