var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  const factors = [2, 3, 5];
  //x=2^a+3^b+5^c
  for (const factor of factors) {
    while (n % factor === 0) {
      n /= factor;
    }
  }
  return n == 1;
};
let n = 0;
console.log(isUgly(n));
