//Longest Substring Without Repeating Characters
function Baskets(s, k) {
  let res = {};
  let low = 0;
  let result = 0;

  for (let high = 0; high < s.length; high++) {
    res[s[high]] = (res[s[high]] || 0) + 1;

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
