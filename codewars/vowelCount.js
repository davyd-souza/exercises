/*
Vowel Count
https://www.codewars.com/kata/54ff3102c1bad923760001f3/

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces
*/

const vowelCount = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	let total = 0

	for(let i = 0; i < str.length; i++) {
		for(let j = 0; j < vowels.length; j++) {
			if(str[i] === vowels[j]) {
				total++
			}
		}
	}

	return total
}

/*
Refactor version:

const vowelCount = (str) => {
	return( str.match(/[aeiou]/ig) || []).length
}
*/