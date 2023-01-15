// module.exports = function check(str, bracketsConfig) {
//   do {
//     let deleted = false;
//     for (let i = 0; i < bracketsConfig.length; i++) {

//       let index = str.indexOf(bracketsConfig[i].join(''));
//       if (index === -1) continue;
//       str = str.replace(bracketsConfig[i].join(''), "");
//       deleted = true;
//     }
//     if (deleted === false) return false;
//   }
//   while (str.length > 1)
//   return str.length === 0;
// }


module.exports = function check(str, bracketsConfig) {
  return findBracketAndDeleteIt(str, bracketsConfig, 0)
}


const findBracketAndDeleteIt = (str, bracketsConfig, i) => {
  if (str.length === 0) {
    return true;
  }
  let openBracket = str[i];
  let closingBracket = findClosingBracket(openBracket, bracketsConfig);
  if (closingBracket === '') return false;
  if (str[i + 1] === closingBracket) {
    str = str.slice(0, i) + str.slice(i + 2);
    i > 0 ? i-- : i = 0;
  } else i++
  return findBracketAndDeleteIt(str, bracketsConfig, i);

}

const findClosingBracket = (openBracket, bracketsConfig) => {
  let closingBracket = ''
  bracketsConfig.forEach(el => {
    if (el[0] === openBracket) {
      closingBracket = el[1];
    }
  })
  return closingBracket;
}
