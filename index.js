// **********
// Smallest Unused Id  https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
// **********

function nextId(ids) {
  const sortedArr = ids.sort((a, b) => a - b);
  let usableId = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (usableId === sortedArr[i]) {
      usableId = sortedArr[i] + 1;
    }
  }
  return usableId;
}
// Valid but try using .includes() in next attempt.
//***********
// Square(n) Sum https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  const sum = numbers.reduce(
    (total, currentVal) => total + currentVal * currentVal,
    0
  );
  return sum;
}
// **********
//Century From Year https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  if (year >= 1 && year <= 100) return 1;
  else if (year % 100 === 0) return year / 100;
  else return Math.floor(year / 100 + 1);
}
// It's just math, stop thinking so hard
// Better solution: const century = year => Math.ceil(year/100)
// ************
