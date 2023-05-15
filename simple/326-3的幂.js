var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 3 !== 0) break;
    n /= 3;
  }
  return n === 1;
};
let n = 45;
console.log(isPowerOfThree(n));
let i = 1;
while (i) {
  console.log(i);
  i <<= 1;
}
