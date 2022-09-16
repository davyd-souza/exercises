/*
Breack camelCase
https://www.codewars.com/kata/5208f99aee097e6552000148

Complete the solution so that the function will break up camel casing, using a space between words.

Example

$ "camelCasing"  =>  "camel Casing"
$ "identifier"   =>  "identifier"
$ ""   
*/


// function breakCamelCase(str) {
// 	if(!str.length) return ""
// 	let arr = [...str]
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i] === arr[i].toUpperCase()) {
// 			arr.splice(i, 0, ' ')
// 			i++
// 		}
// 	}

// 	return arr.join('');
// }

function breakCamelCase(str) {
	return str.replace(/([A-Z])/g, ' $1')
}