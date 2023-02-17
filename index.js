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
// Cats and Shelves https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

function solution(start, finish) {
  let current = start;
  let jumps = 0;
  while (current < finish) {
    if (finish - current >= 3) {
      current += 3;
      jumps++;
    } else if (finish - current >= 1 && finish - current < 3) {
      current++;
      jumps++;
    }
  }
  return jumps;
}
// **Much more clever solution, math again
// function solution(start, finish){
// let stepsToClimb = finish-start
// let numBigJumps = Math.floor(stepsToClimb/3)
// let numSmallJumps = stepsToClimb % 3
// return numBigJumps + numSmallJumps
// }
// ***********
// ASCII Total https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

function uniTotal(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    let value = string.charCodeAt(i);
    total = total + value;
  }
  return total;
}
// Could use spread/split then reduce, but is it more efficient?
// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
