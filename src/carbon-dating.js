const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let number;

  if (typeof sampleActivity == 'string') 
    sampleActivity = transformation(sampleActivity);

  if (typeof sampleActivity == 'string' && sampleActivity > 0 && sampleActivity < 15) 
    number = calculateFormula(sampleActivity);
  else number = false;

  return number;
  throw 'Not implemented';
};

const transformation = str => {
  let count = 0;

  return str.split('').filter(item => {
    if (item !== '.') return item;
    else {
      count++;
      if (count < 2) return item;
    }
  }).join('');
};

const calculateFormula = sampleActivity => 
  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
