/*Problem 4: Create an HTML page with a dropdown list with 
three items in it, then write a JavaScript function that 
displays the number of items and displays the item in the list.
*/
		

function allTheDrinks() {
	let arrayOfOptions = document.getElementById("drinks").options;
	let strOfOptions = "";
	console.log(arrayOfOptions.length);

for (let i = 0; i < arrayOfOptions.length; i++) {
	console.log(arrayOfOptions[i].value);

 strOfOptions + arrayOfOptions[i].value + " "
  
  


  
  console.log()


}

}