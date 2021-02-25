'use strict'

console.log('A very big sum challenge')

function aVeryBigSum(ar) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const bigTotal = BigInt(ar.reduce(reducer));
  return bigTotal;
}

const numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(numbers));


console.log('Diagonal Diference');

function diagonalDifference(arr) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let index = 0; index < arr.length; index++) {
    primaryDiagonal = primaryDiagonal + arr[index][index];
    secondaryDiagonal = secondaryDiagonal + arr[index][arr.length - ( 1 + index )];
  }
  return(Math.abs(primaryDiagonal - secondaryDiagonal));
}

const diagonalArrOne = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
const diagonalArrTwo = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log(diagonalDifference(diagonalArrTwo));


console.log('Plus Minus');

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.forEach(number => {
    if (number > 0) {
      positives++;
    } else if (number < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });
// no necesito var Zeros
// el ro

  const ratios = [
    (positives/arr.length).toPrecision(arr.length), 
    (negatives/arr.length).toPrecision(arr.length),
    (zeros/arr.length).toPrecision(arr.length)
  ];

  ratios.forEach(ratio => console.log(ratio));
}

const plusMinusArray = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(plusMinusArray));

console.log('Stair case');

function staircase(n) {
  let arr = new Array(n).fill(' ');
  for (let index = (arr.length); index > 0; index--) {
    arr[index -1] = '#';
    console.log(arr.join(''));
  }
}

staircase(6);


console.log('Mini-Max Sum');

function miniMaxSum(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = arr.reduce(reducer);
  arr = arr.sort((a, b) => a - b);
  const min = total - arr[arr.length - 1]
  const max = total - arr[0]
  console.log(`${min} ${max}`);
}

const minMaxArray = [5, 7, 1, 9, 3];

miniMaxSum(minMaxArray);

console.log('Birthday Cake Candles');

function birthdayCakeCandles(candles) {
  candles = candles.sort((a, b) => a - b);
  const tallestCandle = candles[candles.length - 1];
  if (tallestCandle === candles[0]) { return candles.length } 
  let candlesQuantity = 1;
  for(let i = (candles.length - 2); i >= 0; i--) {
    if(tallestCandle === candles[i]) {
      candlesQuantity++;
    } else {
      return candlesQuantity;
    }
  }
}

const cakeCandles = [ 3, 2, 1, 3];

console.log(birthdayCakeCandles(cakeCandles));


console.log('Time Convertion');

function timeConversion(s) {
  const hour = s.slice(0, 2);
  const meridian = s.slice(8);
  const minSeg = s.slice(2, 8);

  if((hour <= 11 && meridian === 'AM') || (Number(hour) === 12 && meridian === 'PM')) {
    return (`${hour}${minSeg}`);
  }
  if((hour <= 11 && meridian === 'PM')) {
    return (`${Number(hour) + 12}${minSeg}`);
  }
  return (`00${minSeg}`);
}

console.log(timeConversion('12:45:54PM'));

console.log('Number line jumps');

function kangaroo(x1, v1, x2, v2) {
  let factor;
  x1 < x2 ? factor = 1 : factor = -1;
  const jumps = factor * ((x1 - x2) / (v2 - v1));
  console.log(jumps);
  if (jumps > 0 && Number.isInteger(jumps)) { return 'YES' } 
  return 'NO'; 
}

console.log(kangaroo(21, 6, 47, 3));

console.log('Breaking The Records');

function breakingRecords(scores) {
  let lowest = scores[0];
  let highest = scores[0];
  let breakLow = 0;
  let breakHigh = 0;

  for (let index = 1; index < scores.length; index++) {
    if (scores[index] < lowest) {
      breakLow++;
      lowest = scores[index];
    }
    if (scores[index] > highest) {
      breakHigh++;
      highest = scores[index];
    }
  }

  return [breakLow, breakHigh];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

console.log('Birthday')

function birthday(s, d, m) {
  let possibleAnswers = 0;
  for (let index = 0; (index <= s.length - m); index++) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(s.slice(index, index + m).reduce(reducer) === d) { possibleAnswers++ }
  }
  return (possibleAnswers);
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));

console.log('Divisible Sum Pairs');

function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n; j++) {
      if( (i < j) && ( (ar[i] +  ar[j]) % k) === 0) {
        counter++;
      }
    }
  }
  return counter;
}

let divisibleSumPairsArr = '43 95 51 55 40 86 65 81 51 20 47 50 65 53 23 78 75 75 47 73 25 27 14 8 26 58 95 28 3 23 48 69 26 3 73 52 34 7 40 33 56 98 71 29 70 71 28 12 18 49 19 25 2 18 15 41 51 42 46 19 98 56 54 98 72 25 16 49 34 99 48 93 64 44 50 91 44 17 63 27 3 65 75 19 68 30 43 37 72 54 82 92 37 52 72 62 3 88 82 71'.split(' ');
divisibleSumPairsArr = divisibleSumPairsArr.map((numStr) => parseInt(numStr));
let divisibleSumPairsFactor = 22;
let divisibleSumPairsArrLength = divisibleSumPairsArr.length;

console.log(divisibleSumPairs(divisibleSumPairsArrLength, divisibleSumPairsFactor, divisibleSumPairsArr));



console.log('Same characters in arrow')

function strToArray(str) {
  let array = str.split('')
  return array;
}

function charactersInArrow(str) {
  const array = strToArray(str)
  let getTimesRepeat = 1;
  let characterQuantity = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] === array[index + 1] && index < array.length - 1) {
      getTimesRepeat++;
    } else {
      characterQuantity.push([array[index], getTimesRepeat]);
      getTimesRepeat = 1;
    }
  }
  console.log(characterQuantity);
}

charactersInArrow('aaaabbbcca');