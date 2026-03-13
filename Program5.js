// Sum  of n first n even numbers;
function sumOfNEvenNumbers(n) {
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum = sum + 2 * i;
  // }
  // return sum;
  //above code is commented for timecomplexcity.
  let result = n * (n + 1);
  return result;
}
console.log("Sum of first n even numbers is: " + sumOfNEvenNumbers(4));
