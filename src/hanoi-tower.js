module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {}
  obj.turns = 2**disksNumber - 1;
  obj.seconds = obj.turns / (turnsSpeed / 3600);
  
  return obj;
  throw 'Not implemented';
};
