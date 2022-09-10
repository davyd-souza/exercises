/*
Square Every Digit
https://www.codewars.com/kata/546e2562b03326a88e000020

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/

// function squareEveryDigit(nums) {
// 	let squaredNums = nums.toString().split('')
	
// 	for(let i = 0; i < squaredNums.length; i++) {
// 		squaredNums[i] = Number(squaredNums[i]) * Number(squaredNums[i])
// 	}
// 	return Number(squaredNums.join(''))
// }


function squareEveryDigit(nums) {
	return +nums.toString().split('').map(num => num * num).join('')
}

console.log(squareEveryDigit(9119))
console.log(squareEveryDigit(3212))