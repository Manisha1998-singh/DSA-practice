//Rotate array means shifting elements left or right by some positions (k times)
function RotateArray(num, k) {
  k = k % num; // used to make our k within num length;
  let arr1 = [];
  let arr2 = [];

  for (let j = 0; j < num.length - k; j++) {
    arr1.push(num[j]);
  }
  for (let i = num.length - k; i < num.length; i++) {
    arr2.push(num[i]);
  }
  return [...arr2, ...arr1];
}
console.log(RotateArray([1, 1, 4, 5, 7, 7, 8], 3));
