//Squares of a Sorted Array

function Squares(num) {
  let newArr = [];

  for (let i = 0; i < num.length; i++) {
    //num[i] = num[i] * num[i];   //this is changes the original array
    //newArr.push(num[i]);
    newArr.push(num[i] * num[i]);
  }

  return newArr;
}
let res = Squares([1, 2, 4, 5, 6]);
console.log(res);
