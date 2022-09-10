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
	return +nums							// + in front of nums is to convert back to type Number
		.toString()							// Convert to string
		.split('')							// nums will become an array with every single numbers	# ['9', '1', '1', '9']
		.map(num => num * num)	// multiply the number with himself and assigning to current array index	# ['81', '1', '1', '81']
		.join('')								// join numbers so it returns a string instead of array	# "811181"
}

console.log(squareEveryDigit(9119))