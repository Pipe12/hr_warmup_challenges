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