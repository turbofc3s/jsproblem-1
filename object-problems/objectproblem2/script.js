/*Create an array of people objects with first name, last name, and age, 
then write a JavaScript function that takes in an array and 
console logs the first and last names of all the people.
*/

	let arrayOfPeople = [
		{
			firstName: "john", 
			lastName: "do", 
			age: 45
		}, 
		{
			firstName: "sam", 
			lastName: "man", 
			age: 26
	    },
	    {
			firstName: "jill", 
			lastName: "do", 
			age: 43
	    }
	]

	function completeName(arry) {
		for(let i=0; i < arry.length; i++) {
			  console.log(arry[i].firstName + " " + arry[i].lastName)
	    };
	}  
completeName(arrayOfPeople);