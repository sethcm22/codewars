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
