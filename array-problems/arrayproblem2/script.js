/*Define a function that takes in an array of elements and joins them together 
into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"
take array and  split into individual strings
then join the individual strings into one string with a comma seperating them


*/
let items = ["brushes", "and", "combs", "hair"];                                             

function arrayToString (arry) {
	let newArry = arry.join(", ");

	return newArry


}

console.log(arrayToString(items));