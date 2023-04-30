/**
 *
 * @param {*} s
 * @returns
 * @describe 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串
 */
var isPalindrome = function (s) {
  if (s.length === 1) return true;
  // 将所有符号转为小写
  s = s.toLowerCase();
  // 记录能使用的符号（数字和字母）
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] >= "a" && s[i] <= "z") ||
      (s[i] >= "A" && s[i] <= "Z") ||
      (s[i] >= "0" && s[i] <= "9")
    ) {
      str += s[i];
    }
  }
  // 双指针循环遍历
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i += 1;
    j -= 1;
  }
  return true;
};
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
