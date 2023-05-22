var intersection = function (nums1, nums2) {
  //对一个数组去重
  nums1 = new Set(nums1);
  //对第二个数组去重
  nums2 = new Set(nums2);
  //结果数组
  let res = new Set();
  nums2.forEach((val) => {
    if (nums1.has(val)) res.add(val);
  });
  //将set转为数组
  return [...res];
};
let a = [4, 9, 5];
let b = [9, 4, 9, 8, 4];
console.log(intersection(a, b));
