//Rotate array means shifting elements left or right by some positions (k times)
function RotateArray(num) {
  let min = num[0];
  index = 0;

  for (let i = 1; i < num.length; i++) {
    if (num[i] < min) {
      min = num[i];
      index = i;
    }
  }
  return index;
}
console.log(RotateArray([5, 7, 7, 8, 1, 1, 4]));
