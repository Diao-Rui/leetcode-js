var countBits = function (n) {
  let arr = [0];
  for (let i = 1; i <= n; i++) {
    let count = 0,
      temp = i;
    while (temp) {
      //   if (temp % 2 !== 0) count += 1;
      //   temp = Math.floor(temp / 2);
      // 为运算，前一个数和后一个数做与运算，为0则不是1，不为0则为1
      temp = temp & (temp - 1);
      count++;
    }
    arr.push(count);
  }
  return arr;
};
let n = 5;
console.log(countBits(n));
