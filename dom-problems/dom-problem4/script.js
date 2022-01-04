/*Problem 4: Create an HTML page with a dropdown list with 
three items in it, then write a JavaScript function that 
displays the number of items and displays the item in the list.
*/
		

function allTheDrinks() {
	let arrayOfOptions = document.getElementById("drinks").options;
	let strOfOptions = "";
	console.log(arrayOfOptions.length);
	let x = arrayOfOptions.length
	document.getElementById("p1").innerHTML = "Found " +  x + " options in the list";

for (let i = 0; i < arrayOfOptions.length; i++) {
	console.log(arrayOfOptions[i].value);

 strOfOptions = strOfOptions + arrayOfOptions[i].value + " "
 }
	document.getElementById("p2").innerHTML = "Found these drinks " + strOfOptions;
}
