module.exports = function toReadable (number) {
  let units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let teens = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };
  let tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  if (number < 10 && number >= 0) {
    return units[number];
  }
  if (number >=10 && number < 20) {
    return teens[number];
  }
  if (number > 19 && number < 100) {
    let arr = number.toString().split('');
    if(arr[1] === '0') {
      return tens[arr[0]];
    } else {
      return tens[arr[0]] + ' ' + units[arr[1]];
    }
  }
  if (number >= 100 && number < 1000) {
    let newArr = number.toString().split('');
    if(newArr[1] === '0' && newArr[2] === '0') {
      return units[newArr[0]] + ' ' + 'hundred';
    } else if (+(newArr[1] + newArr[2]) < 20 && +(newArr[1] + newArr[2]) >= 10)  {
      return units[newArr[0]] + ' ' + 'hundred ' + teens[+(newArr[1] + newArr[2])];
    }
    else {
      if(newArr[1] === '0') {
        return units[newArr[0]] + ' ' + 'hundred ' + units[newArr[2]];
      }
      if(newArr[2] === '0') {
        return units[newArr[0]] + ' ' + 'hundred ' + tens[newArr[1]];
      } else {
        return units[newArr[0]] + ' ' + 'hundred ' + tens[newArr[1]] + ' ' + units[newArr[2]];
      }
    }
  }
}
