function sum(n) {
  //   if (n == 0) {
  //     return 0;
  //   }
  //   let temp = 0;
  //   for (let i = n; i > 0; i--) {
  //     temp = temp + i;
  //   }
  //   return temp;
  let result = n * (n + 1);
  return result / 2;
}
console.log("Sum of first n natural numbers is: " + sum(4));
