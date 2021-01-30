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

  const ratios = [
    (positives/arr.length).toPrecision(arr.length), 
    (negatives/arr.length).toPrecision(arr.length),
    (zeros/arr.length).toPrecision(arr.length)
  ];

  ratios.forEach(ratio => console.log(ratio));
}

const plusMinusArray = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(plusMinusArray));