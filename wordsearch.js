const wordSearch = (letters, word) => {
  //check for horz words
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  //Transpose work
  let transposeArray = [];
  let innerArray = [];
  let count = 0;
  while (count < letters[0].length) {
    for (let item of letters) {
      innerArray.push(item[count]);
    }
    transposeArray.push(innerArray);
    innerArray = [];
    count++;
  }
  //Check for vert words
  const vertiHorzJoin = transposeArray.map(ls => ls.join(''));
  for (let item of vertiHorzJoin) {
    if (item.includes(word)) return true;
  }
  //return false if not found in either
  return false;
};

module.exports = wordSearch;