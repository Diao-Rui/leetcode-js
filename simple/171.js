var titleToNumber = function (str) {
  const arr = [
    0,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let res = 0;
  let m = str.length - 1;
  for (let i = m; i >= 0; i--) {
    let num = arr.indexOf(str[i]);
    res += num * Math.pow(26, m - i);
  }
  console.log(res);
};
titleToNumber("ABC");
