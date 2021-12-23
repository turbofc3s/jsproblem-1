/*Problem 4: Create an HTML page with a dropdown list with 
three items in it, then write a JavaScript function that 
displays the number of items and displays the item in the list.
*/
;		

function allTheDrinks(bigList) {
let arrayOfOptions = bigList.options;
console.log(arrayOfOptions);
  alert("I am an alert box!");
  let x = document.getElementById("bigList").value;
  document.getElementById("p1").innerHTML = "You selected: " + x;

	return bigList.options.length;
}
let theDrinks = document.getElementById("drinks");		
console.log(allTheDrinks(theDrinks));


}