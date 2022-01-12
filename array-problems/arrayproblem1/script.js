/*
Write a JavaScript function that takes in two parameters, an array and a number (n), 
 and return the first n elements of that array.

define a function with array and a number
define an array of items
will use the n parameter to find the n element in the array by counting to the n number
use for loop  and stop at n number

*/
let cars = ["black", "white", "yellow", "red", "blue", "purple", "orange"]
let Things = ["toys", "cars", "airplanes", "trucks"]
function firstElements (arry, num) {
	
	return arry.slice(0, num)//  grabs the first num indexes
		
	}

console.log(firstElements(Things, 2))