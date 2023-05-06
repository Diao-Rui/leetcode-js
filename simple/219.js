var containsNearbyDuplicate = function (nums, k) {
  //创建一个hash表
  const arr = new Map();
  let min = 3276700;
  nums.forEach((item, index) => {
    if (arr.has(item)) {
      let temp = index - arr.get(item);
      min = min < temp ? min : temp;
      arr.set(item, index);
    } else {
      arr.set(item, index);
    }
  });
  return min <= k;
};
let nums = [1, 0, 1, 1],
  k = 1;
console.log(containsNearbyDuplicate(nums, k));
