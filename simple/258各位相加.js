var addDigits = function (num) {
  while (num >= 10) {
    let res = 0;
    while (num > 0) {
      res += num % 10;
      num = Math.floor(num / 10);
    }
    num = res;
  }
  return num;
};
let n = 1281;
console.log(addDigits(n));
