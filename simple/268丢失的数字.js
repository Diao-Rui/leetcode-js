var missingNumber = function (nums) {
  let set = new Set();
  nums.forEach((item) => {
    set.add(item);
  });
  let i = 0,
    res = 0;
  while (true) {
    if (!set.has(i)) {
      res = i;
      break;
    }
    i += 1;
  }
  return res;
};
nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums));
