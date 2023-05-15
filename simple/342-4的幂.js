var isPowerOfFour = function (n) {
  //   let set = new Set([
  //     1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304,
  //     16777216, 67108864, 268435456, 1073741824,
  //   ]);
  //   return set.has(n);
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 4 !== 0) break;
    n = Math.floor(n / 4);
  }
  return n == 1;
};
