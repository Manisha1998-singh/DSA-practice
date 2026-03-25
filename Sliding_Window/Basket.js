// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

///Fruit Into Baskets

function Baskets(s, k) {
  let res = {};
  let low = 0;
  let result = 0;

  for (let high = 0; high < s.length; high++) {
    res[s[high]] = (res[s[high]] || 0) + 1; // used for checking that high is exist in obect or not if it not exits it add 1.

    if (Object.keys(res).length > k) {
      res[s[low]]--;
      if (res[s[low]] === 0) {
        delete res[s[low]];
      }
      low++;
    }
    result = Math.max(result, high - low + 1);
  }
  return result;
}

console.log(Baskets([1, 2, 1], 2));
