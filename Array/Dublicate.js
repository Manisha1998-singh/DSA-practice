//Contains Duplicate
//Check if any value appears more than once.

function Duplicate(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1]) {
      result.push(num[i]);
    }
  }
  return result;
}
console.log(Duplicate([1, 1, 4, 5, 7, 7, 8]));
