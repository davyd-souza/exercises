/*
Calculating with Functions
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

$ seven(times(five()));		# must return 35
$ four(plus(nine()));			# must return 13
$ eight(minus(three()));	# must return 5
$ six(dividedBy(two()));	# must return 3

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Division should be integer division. For example, this should return 2, not 2.666666...:

$ eight(dividedBy(three()));
*/

const expression = (num, operation) => {
	if(!operation) return num
	return operation(num)
}

const zero 	= operation => expression(0, operation)
const one 	= operation => expression(1, operation)
const two 	= operation => expression(2, operation)
const three = operation => expression(3, operation)
const four 	= operation => expression(4, operation)
const five 	= operation => expression(5, operation)
const six 	= operation => expression(6, operation)
const seven = operation => expression(7, operation)
const eight = operation => expression(8, operation)
const nine 	= operation => expression(9, operation)

const plus = (x) => {
	return function(y) {
		return y + x
	}
}

const minus = (x) => {
	return function(y) {
		return y - x
	}
}

const times = (x) => {
	return function(y) {
		return y * x
	}
}

const dividedBy = (x) => {
	return function(y) {
		return Math.floor(y / x)
	}
}