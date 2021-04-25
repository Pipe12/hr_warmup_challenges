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

console.log('Migratory Birds')

function migratoryBirds(arr) {
  let quantity = 0;
  let type = 0;
  arr = arr.sort((a, b) => a - b);
  let bridsQuantity = new Array(arr[arr.length - 1]).fill(0);
  
  for (let index = 0; index < arr.length; index++) {
    bridsQuantity[ arr[index] - 1 ]++;
    if(quantity < bridsQuantity[ arr[index] -1 ]) {
      quantity = bridsQuantity[arr[index] - 1];
      type = arr[index];
    }
  }
  console.log(`type= ${type} quantity= ${quantity}`);
}

let birds = [1, 1, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

migratoryBirds(birds);

console.log('Day Of Programmer');

function dayOfProgrammer(year) {
  const leapYear = `12.09.${year}`;
  const normalYear = `13.09.${year}`;

  if (year > 1918) {
    if (((year % 4 === 0) && !(year % 100 === 0)) || (year % 400 === 0)) {
      return leapYear;
    } else {
      return normalYear;
    }
  }
  if (year < 1918) {
    if (year % 4 === 0) {
      return leapYear;
    } else {
      return normalYear;
    }  
  }
  return `26.09.${year}`;
}

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(1918));


console.log('Bill Division');

function bonAppetit(bill, k, b) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const billSummation = bill.reduce(reducer);
  const partOfAnna = (billSummation - bill[k]) / 2;
  const difference = b - partOfAnna;
  if(difference === 0) {
    return 'Bon Appetit'
  } else { return difference }
}

const k1 = 1;
const bill1 = [3, 10, 2, 9];
const b1 = 12;

const b2 = 7;

console.log(bonAppetit(bill1, k1, b1));
console.log(bonAppetit(bill1, k1, b2));

console.log('Sales by match');

function sockMerchant(n, ar) {
  let colorsQuantity = 1;
  let pairs = 0;
  ar = ar.sort((a, b) => a - b);
  for (let index = 0; index < n; index++) {
    if(ar[index] === ar[index + 1]) {
      colorsQuantity++;
    } else {
      pairs = pairs + Math.floor(colorsQuantity / 2);
      colorsQuantity = 1;
    }
  }
  return pairs;
}

const colorArrayOne = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
const colorArrayTwo = [10, 20, 20, 10, 10, 30, 50, 10, 20];

const colorArrayLengthOne = colorArrayOne.length;
const colorArrayLengthTwo = colorArrayTwo.length;

console.log(sockMerchant(colorArrayLengthOne, colorArrayOne));
console.log(sockMerchant(colorArrayLengthTwo, colorArrayTwo));


console.log('Drawing book');

function pageCount(n, p) {
  let turnRear = 0;
  if(n % 2 === 0 && p % 2 !== 0) { 
    turnRear = Math.floor((n - p) / 2) + 1;
  } else {
    turnRear = Math.floor((n - p) / 2);
  }
  const turnFront = Math.floor(p / 2);
  if(turnFront < turnRear) { return turnFront }
  return turnRear;
}

console.log(pageCount(6, 5));


console.log('Counting Valleys');

function countingValleys(steps, path) {
  let seaLevel = 0;
  let quantityOfValleys = 0;

  for (let index = 0; index < steps; index++) {
    if (path[index] === 'D') {
      seaLevel--;
    } else {
      seaLevel++;
    }
    if (path[index] === 'U' && seaLevel === 0) {
      quantityOfValleys++;
    }
  }
  return quantityOfValleys;
}

const pathOne = 'DUDDDUUDUU';
const pathTwo = 'UDDDUUUUDDDU';

console.log(countingValleys(pathOne.length, pathOne));
console.log(countingValleys(pathTwo.length, pathTwo));

console.log('Electronics shop')

function getMoneySpent(keyboards, drives, b) {
  const sortArr = (arr) => arr.sort((a, b) => b - a);
  keyboards = sortArr(keyboards);
  drives = sortArr(drives);

  const getPointer = (array) => {
    for (let index = 0; index < array.length; index++) {
      console.log(index);
      if(array[index] < b) {
        return index;
      }
    }
    return Infinity;
  }  

  const keyboardsPointer = getPointer(keyboards);
  const drivesPointer = getPointer(drives);

  if(keyboardsPointer === Infinity || drivesPointer === Infinity) {
    return -1;
  }

  let maxQuantity = -1;

  for (let i = keyboardsPointer; i < keyboards.length; i++) {
    for (let j= drivesPointer; j < drives.length; j++) {
      if(maxQuantity < keyboards[i] + drives[j] && keyboards[i] + drives[j] <= b) {
        maxQuantity = keyboards[i] + drives[j]
      }
    }
  }
  return maxQuantity;
}

const budgetOne = 10;
const keyboardsOne = [3, 1, 12];
const drivesOne = [5, 2, 8, 14];

console.log(getMoneySpent(keyboardsOne, drivesOne, budgetOne));

console.log('Cats and Mouse');

function catAndMouse(x, y, z) {
  const distCatA = Math.abs(x - z);
  const distCatB = Math.abs(y - z);

  if (distCatA < distCatB) {
    console.log('Cat A');
  } else if(distCatB < distCatA) {
    console.log('Cat B'); 
  } else {
    console.log('Mouse C');
  }
}

catAndMouse(1, 2, 3);
catAndMouse(1, 3, 2);

console.log('Apple and Orange');

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let fruitCounter = 0;

  function SumFruitsInTheHouse(treePosition, fruits) {
    for (let index = 0; index < fruits.length; index++) {
      if((fruits[index] + treePosition) >= s && (fruits[index] + treePosition) <= t) {
        fruitCounter++;
      }
    }
    fruitCounter = 0;
  }  

  SumFruitsInTheHouse(a, apples);
  SumFruitsInTheHouse(b, oranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

console.log('Between Two Sets')

function getTotalX(a, b) {
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  let factors = 0;
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    let isFactor = true;
    
    let j = 0;
    while (j < a.length && isFactor) {
      if (i % a[j] !== 0) { isFactor = false}
      j++
    }

    j = 0;
    while (j < b.length && isFactor) {
      if (b[j] % i !== 0) { isFactor = false }
      j++
    }
    if(isFactor){factors++;}
  }
  console.log(factors);
}

const firstSet = [2]
const secoundSet = [20, 30, 12]

getTotalX(firstSet, secoundSet);

console.log('Forming Magic Square');

function formingMagicSquare(s) {
  
  let cost = Infinity;
  let currentCost;

  const posibleMagicSqueres = [
    [ [8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [ [6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [ [6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [ [2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [ [2, 7, 6], [9, 5, 1], [4, 3, 8]],
    [ [4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [ [4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [ [8, 1, 6], [3, 5, 7], [4, 9, 2]]
  ];

  posibleMagicSqueres.forEach((squere) => {
    currentCost = (
      Math.abs(squere[0][0] - s[0][0]) +
      Math.abs(squere[0][1] - s[0][1]) +
      Math.abs(squere[0][2] - s[0][2]) +
      Math.abs(squere[1][0] - s[1][0]) +
      Math.abs(squere[1][1] - s[1][1]) +
      Math.abs(squere[1][2] - s[1][2]) +
      Math.abs(squere[2][0] - s[2][0]) +
      Math.abs(squere[2][1] - s[2][1]) +
      Math.abs(squere[2][2] - s[2][2])
      );

      if (currentCost < cost) {
        cost = currentCost;
      }
  });
  return(cost);
}

const magicSquare = [ [4, 8, 2], [4, 5, 7], [6, 1, 6] ];
formingMagicSquare(magicSquare);


