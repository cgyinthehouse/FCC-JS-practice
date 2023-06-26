function convertToRoman(num) {
  const romanNums = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  let result = '';
  console.log(Object.keys(romanNums))
  // .keys()後，keys會由小到大排列，因此這裡需用sort反轉
  const baseToFind = Object.keys(romanNums).sort((a, b) => b - a);
  while (true) {
  // 從最大開始往小的找，一旦key小於num就能得到base (用find()會回傳第一個找到的元素的特性)
    let base = baseToFind.find(element => element <= num);
    num -= base;
    result += romanNums[base];
    console.log(base);
    if (num == 0) break;
  }
  console.log(result);
  return result;
}


convertToRoman(777);

