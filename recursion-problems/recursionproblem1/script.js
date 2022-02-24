/*Write a JavaScript function to calculate the factorial of a number.
1. */

function calcFactorial(int) {
	if (int === 1) {
	  return 1;
	}			
  	  return int * calcFactorial(int - 1);       
 }

console.log(calcFactorial(7));

