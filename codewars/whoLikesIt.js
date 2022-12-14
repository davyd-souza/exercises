/*
Who likes it?
https://www.codewars.com/kata/5266876b8f4bf2da9b000362

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

	$ []                                -->  "no one likes this"
	$ ["Peter"]                         -->  "Peter likes this"
	$ ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
	$ ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
	$ ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply inicreases.
*/

function whoLikesIt(arr) {
	switch(arr.length) {
		case 0:
			return "no one likes this"
		case 1: 
			return `${arr[0]} likes this`
		case 2:
			return `${arr.join(' and ')} like this`
		case 3:
			return `${arr.splice(0,2).join(', ')} and ${arr[0]} like this`
		default:
			return `${arr.splice(0,2).join(', ')} and ${arr.length} others like this`
	}
}