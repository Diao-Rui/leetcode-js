var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 != 0) return false;
    n = Math.floor(n / 2);
  }
  return true;
};
n = 0;
console.log(isPowerOfTwo(n));
