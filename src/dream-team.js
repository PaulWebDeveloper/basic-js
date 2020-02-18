module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  members = clearUnnecessary(members);
  members = searchDreamTeamName(members);

  return members;
};

const clearUnnecessary = arr => arr.map(item => 
  typeof item === 'string' ? item.toUpperCase().replace(/\s/g, '') : ' ').sort();

const searchDreamTeamName = arr => arr.map(item => 
  item.split('').filter((elem, i) => /^[A-Z]/.test(elem) && !i ? item : '')).join('');
